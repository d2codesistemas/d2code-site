import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const ts=require('typescript');
const source=fs.readFileSync(new URL('../app/heroRotation.ts',import.meta.url),'utf8');
const exports={};
vm.runInNewContext(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{exports});
const {createHeroRotation}=exports;

class Events {
 handlers=new Map();
 addEventListener(type,fn){if(!this.handlers.has(type))this.handlers.set(type,new Set());this.handlers.get(type).add(fn);}
 removeEventListener(type,fn){this.handlers.get(type)?.delete(fn);}
 emit(type,event={}){for(const fn of this.handlers.get(type)??[])fn(event);}
}
function setup({reduced=false,hover=false,hidden=false,outside=false}={}){
 const root=new Events(),doc=new Events(),win=new Events(),motion=new Events();
 let now=0,id=0,rect={top:104,bottom:900,left:0,right:1440};
 if(outside)rect={...rect,top:-1000,bottom:-100};
 const timers=new Map(),scenes=[],states=[];
 Object.assign(win,{innerHeight:900,innerWidth:1440,matchMedia:q=>q.includes('reduced-motion')?motion:{matches:hover},setTimeout:(fn,ms)=>{const key=++id;timers.set(key,{fn,at:now+ms});return key;},clearTimeout:key=>timers.delete(key)});
 Object.assign(doc,{defaultView:win,visibilityState:hidden?'hidden':'visible',querySelector:()=>({getBoundingClientRect:()=>({bottom:104})})});
 Object.assign(root,{ownerDocument:doc,matches:()=>hover,getBoundingClientRect:()=>rect});
 motion.matches=reduced;
 const controller=createHeroRotation(root,n=>scenes.push({scene:n,at:now}),s=>states.push(s));
 return {root,doc,win,motion,controller,scenes,states,timers,
  advance(ms){const end=now+ms;for(;;){const next=[...timers].sort((a,b)=>a[1].at-b[1].at)[0];if(!next||next[1].at>end)break;assert.ok(timers.size<=1,'only one timer may exist');now=next[1].at;timers.delete(next[0]);next[1].fn();}now=end;},
  mouse(inside){root.emit(inside?'pointerenter':'pointerleave',{pointerType:'mouse'});},
  focus(keyboard=true){root.emit('focusin',{target:{matches:selector=>selector===':focus-visible'?keyboard:true}});},
  visibility(active){doc.visibilityState=active?'visible':'hidden';doc.emit('visibilitychange');},
  viewport(visible){rect={...rect,top:visible?104:-1000,bottom:visible?900:-100};win.emit('scroll');},
  preference(value){motion.matches=value;motion.emit('change');},
 };
}

test('first scene lasts 8 seconds; full 1 → 2 → 3 → 1 cycle, one timer',()=>{
 const h=setup();h.advance(7999);assert.equal(h.scenes.length,0);h.advance(1);h.advance(16000);
 assert.deepEqual(h.scenes,[{scene:1,at:8000},{scene:2,at:16000},{scene:0,at:24000}]);assert.equal(h.timers.size,1);h.controller.dispose();
});
test('Pause persists through mouse, tab and viewport changes; Resume gets 8 fresh seconds',()=>{
 const h=setup();h.advance(7000);h.controller.toggle();h.mouse(true);h.visibility(false);h.viewport(false);h.advance(60000);h.mouse(false);h.visibility(true);h.viewport(true);h.advance(20000);assert.equal(h.scenes.length,0);
 h.controller.toggle();h.advance(7999);assert.equal(h.scenes.length,0);h.advance(1);assert.equal(h.scenes.at(-1).scene,1);h.controller.dispose();
});
test('manual selection, including current scene, never restarts without Resume',()=>{
 const h=setup();h.advance(5000);h.controller.select(2);h.advance(30000);assert.equal(h.scenes.length,1);assert.equal(h.scenes[0].scene,2);
 h.controller.select(2);h.mouse(true);h.mouse(false);h.advance(16000);assert.equal(h.scenes.length,2);assert.equal(h.timers.size,0);
 h.controller.toggle();h.advance(7999);assert.equal(h.scenes.length,2);h.advance(1);assert.equal(h.scenes.at(-1).scene,0);h.controller.dispose();
});
test('mouse suspends temporarily; leaving restarts a complete interval',()=>{
 const h=setup();h.advance(7900);h.mouse(true);h.advance(30000);assert.equal(h.scenes.length,0);h.mouse(false);h.advance(7999);assert.equal(h.scenes.length,0);h.advance(1);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('keyboard focus pauses persistently, but Resume works while focus stays on its button',()=>{
 const h=setup();h.advance(4000);h.focus();h.root.emit('focusout');h.mouse(false);h.advance(20000);assert.equal(h.scenes.length,0);
 h.controller.toggle();h.advance(8000);assert.equal(h.scenes.length,1);h.focus();h.advance(8000);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('pointer focus does not invert the intended Pause click; touch does not create hover lock',()=>{
 const h=setup();h.focus(false);assert.equal(h.states.at(-1).enabled,true);h.controller.toggle();assert.equal(h.states.at(-1).enabled,false);
 h.root.emit('pointerenter',{pointerType:'touch'});h.controller.toggle();h.advance(8000);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('inactive tab cancels timer; returning waits eight seconds without catch-up',()=>{
 const h=setup();h.advance(7999);h.visibility(false);h.advance(120000);assert.equal(h.scenes.length,0);h.visibility(true);h.advance(7999);assert.equal(h.scenes.length,0);h.advance(1);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('offscreen banner suspends; repeated visible scroll events do not starve or duplicate the timer',()=>{
 const h=setup();h.advance(7000);h.viewport(false);h.advance(60000);assert.equal(h.scenes.length,0);h.viewport(true);for(let i=0;i<7;i++){h.advance(1000);h.viewport(true);}h.advance(1000);assert.equal(h.scenes.length,1);assert.equal(h.timers.size,1);h.controller.dispose();
});
test('multiple temporary blockers must all clear before a fresh interval starts',()=>{
 const h=setup();h.mouse(true);h.visibility(false);h.viewport(false);h.mouse(false);h.visibility(true);h.advance(30000);assert.equal(h.scenes.length,0);h.viewport(true);h.advance(8000);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('reduced motion starts manual and cannot be resumed; manual selectors still work',()=>{
 const h=setup({reduced:true});assert.equal(h.states.at(-1).reduced,true);assert.equal(h.states.at(-1).enabled,false);h.controller.toggle();h.advance(60000);assert.equal(h.scenes.length,0);h.controller.select(1);assert.equal(h.scenes.at(-1).scene,1);assert.equal(h.timers.size,0);h.controller.dispose();
});
test('changing motion preference stops playback, and removing it requires explicit Resume',()=>{
 const h=setup();h.advance(7000);h.preference(true);h.advance(60000);h.preference(false);h.advance(16000);assert.equal(h.scenes.length,0);h.controller.toggle();h.advance(8000);assert.equal(h.scenes.length,1);h.controller.dispose();
});
test('hidden, hovered or offscreen initial conditions do not start the clock',()=>{
 for(const option of [{hidden:true},{hover:true},{outside:true}]){const h=setup(option);h.advance(30000);assert.equal(h.scenes.length,0);assert.equal(h.timers.size,0);h.controller.dispose();}
});
test('cleanup removes listeners and timer, including effect remount without duplicate rotation',()=>{
 const h=setup();h.advance(4000);h.controller.dispose();assert.equal(h.timers.size,0);h.mouse(false);h.visibility(false);h.visibility(true);h.viewport(false);h.viewport(true);h.preference(false);h.advance(50000);assert.equal(h.scenes.length,0);
 const next=createHeroRotation(h.root,n=>h.scenes.push({scene:n}),()=>{});h.advance(8000);assert.equal(h.scenes.length,1);assert.equal(h.timers.size,1);next.dispose();assert.equal(h.timers.size,0);
});

function renderHome(reduced=false){
 const React=require('react');
 const jsx=require('react/jsx-runtime');
 const component={};
 const imports={
  react:{...React,useState:initial=>React.useState(initial&&typeof initial==='object'&&'reduced' in initial?{enabled:!reduced,reduced}:initial)},
  'react/jsx-runtime':jsx,
  'next/image':props=>React.createElement('img',{src:props.src,alt:props.alt,'aria-hidden':props['aria-hidden']}),
  './clarity':{trackClarityEvent:()=>{}},
  './heroRotation':{createHeroRotation},
  './home-redesign.module.css':{preview:'preview'},
 };
 const home=fs.readFileSync(new URL('../app/HomeRedesign.tsx',import.meta.url),'utf8');
 vm.runInNewContext(ts.transpileModule(home,{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,{exports:component,require:name=>{if(!(name in imports))throw Error(name);return imports[name];}});
 return require('react-dom/server').renderToStaticMarkup(React.createElement(component.default));
}
test('reduced-motion UI offers manual mode, without an unavailable Resume promise',()=>{
 const html=renderHome(true);
 assert.ok(html.includes('Modo manual · movimento reduzido'));
 assert.ok(!html.includes('class="hp-playback"'));
 assert.equal((html.match(/class="hp-scene-number"/g)??[]).length,3);
});
test('carousel presents one current heading and image without automatic live announcements',()=>{
 const html=renderHome();
 assert.ok(html.includes('class="hp-playback"'));
 assert.ok(html.includes('>Pausar</button>'));
 assert.equal((html.match(/<h1\b/g)??[]).length,1);
 assert.equal((html.match(/class="hp-scene-copy" aria-hidden="true"/g)??[]).length,2);
 assert.equal((html.match(/<img[^>]*aria-hidden="true"/g)??[]).length,2);
 assert.ok(html.includes('aria-live="off"'));
});
