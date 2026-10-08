import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const app = new URL('../app/', import.meta.url);

function load(name, { env = 'production', window, imports = {} } = {}) {
  const source = fs.readFileSync(new URL(name, app), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX,
    target: ts.ScriptTarget.ES2020, esModuleInterop: true,
  } }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, process: { env: { NODE_ENV: env } }, window,
    require: name => { if (!(name in imports)) throw new Error(`Unexpected import: ${name}`); return imports[name]; },
  });
  return exports;
}

function jsx(type, props) {
  return typeof type === 'function' ? type(props) : { type, props };
}
const runtime = { jsx, jsxs: jsx, Fragment: 'fragment' };
function flatten(element) {
  if (!element || typeof element !== 'object') return [];
  const children = [element.props?.children].flat(Infinity);
  return [element, ...children.flatMap(flatten)];
}

for (const env of ['production', 'development', 'test']) {
  for (const hostname of ['d2code.com.br', 'localhost', '127.0.0.1', 'staging.d2code.com.br']) {
    const allowed = env === 'production' && hostname === 'd2code.com.br';
    test(`collector and events: ${env} / ${hostname}`, () => {
      const calls = [];
      const window = { location: { hostname }, clarity: (...args) => calls.push(args) };
      const clarity = load('clarity.ts', { env, window });
      assert.equal(clarity.isClarityProductionHost(hostname), allowed);
      clarity.trackClarityEvent('whatsapp_contato');
      assert.equal(calls.length, allowed ? 1 : 0);
      for (const consent of [null, undefined, 'declined', 'accepted']) {
        const component = load('AnalyticsConsent.tsx', { env, window, imports: {
          './clarity': clarity,
          react: { useState: () => [consent, () => {}], useEffect: () => {} },
          'react/jsx-runtime': runtime,
          'next/script': props => ({ type: 'script', props }),
        } });
        const tree = flatten(component.default());
        assert.equal(tree.some(e => e.type === 'script'), allowed && consent === 'accepted');
        assert.equal(tree.some(e => e.type === 'aside'), consent === null);
      }
    });
  }
}

test('tracking is safe during SSR or when collector is absent/unavailable', () => {
  assert.doesNotThrow(() => load('clarity.ts').trackClarityEvent('email_contato'));
  for (const clarity of [undefined, () => { throw new Error('collector unavailable'); }]) {
    assert.doesNotThrow(() => load('clarity.ts', { window: { location: { hostname: 'd2code.com.br' }, clarity } }).trackClarityEvent('bookings_contato'));
  }
});

test('actual home handlers distinguish contact channel and internal navigation', () => {
  const calls = [];
  const component = load('HomeContent.tsx', { imports: {
    react: { useState: initial => [initial, () => {}] },
    'react/jsx-runtime': runtime,
    'next/image': props => ({ type: 'img', props }),
    './clarity': { trackClarityEvent: name => calls.push(name) },
    './home-preview.module.css': { preview: 'preview' },
  } });
  const links = flatten(component.default()).filter(e => e.type === 'a');
  for (const [match, expected, count] of [
    [href => href.startsWith('https://wa.me/'), 'whatsapp_contato', 5],
    [href => href.startsWith('https://outlook.office.com/'), 'bookings_contato', 1],
    [href => href.startsWith('mailto:'), 'email_contato', 2],
    [href => href === '#aplicacoes', 'ver_servicos', 2],
    [href => href === '#contato', 'cta_conversa', 1],
  ]) {
    const selected = links.filter(e => match(e.props.href));
    assert.equal(selected.length, count);
    for (const link of selected) {
      calls.length = 0;
      link.props.onClick();
      assert.deepEqual(calls, [expected]);
    }
  }
});
