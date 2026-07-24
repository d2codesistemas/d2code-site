"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Consent = "accepted" | "declined" | null;

const STORAGE_KEY = "d2code-analytics-consent";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent | undefined>(undefined);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      setConsent(saved === "accepted" || saved === "declined" ? saved : null);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrms869m9l");
          `}
        </Script>
      )}
      {consent === null && (
        <aside className="consent-banner" aria-label="Preferências de privacidade">
          <p>
            Usamos o Microsoft Clarity para entender como o site é utilizado e melhorar a experiência.
            Você pode aceitar ou continuar sem analytics. <a href="/privacidade/">Saiba mais</a>.
          </p>
          <div className="consent-actions">
            <button type="button" onClick={() => choose("declined")}>SEM ANALYTICS</button>
            <button type="button" onClick={() => choose("accepted")}>ACEITAR</button>
          </div>
        </aside>
      )}
    </>
  );
}
