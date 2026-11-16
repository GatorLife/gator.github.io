// One US Letter sheet (816 x 1056 CSS px), laid out in fixed pixels so the
// screen view and the printed page are the same thing. The layout follows the
// GATOR capability sheets: white paper, ink text, green rules and labels.
import type { ReactElement, ReactNode } from "react";
import {
  AGENTS,
  APP_LABEL,
  APP_URL,
  ASK,
  BRIEFING_HREF,
  COMPLIANCE_BADGES,
  DEPLOYMENT_MODES,
  HEADLINE_STAT,
  MODULES,
  SITE_HEADLINE,
  SITE_LEAD,
  STEPS,
  SUPPORT_EMAIL,
} from "./content";

const MONO = "font-mono text-[12px] font-semibold";
const LABEL = `${MONO} uppercase tracking-[0.16em] text-green-ink`;
const BODY = "text-[12.5px] leading-[19px] text-body";
const LINK = "text-green-ink underline underline-offset-2 hover:text-ink";

function Label({ children }: { children: ReactNode }): ReactElement {
  return <h2 className={LABEL}>{children}</h2>;
}

function Classification(): ReactElement {
  return <span className={`${MONO} tracking-[0.2em]`}>UNCLASSIFIED</span>;
}

function printSheet(): void {
  window.print();
}

// Screen only: the bar above the sheet.
function Toolbar(): ReactElement {
  return (
    <div className="flex w-[816px] items-center justify-between font-mono text-[12px] font-medium uppercase tracking-[0.14em] print:hidden">
      <a
        href={APP_URL}
        className="text-on-dark-muted transition-colors hover:text-on-dark"
      >
        {APP_LABEL}
      </a>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={printSheet}
          className="h-9 cursor-pointer border border-desk-line px-4 text-on-dark transition-colors hover:border-green hover:text-green"
        >
          Print / Save PDF
        </button>
        <a
          href={BRIEFING_HREF}
          className="inline-flex h-9 items-center bg-green px-4 text-ink transition-colors hover:bg-green/90"
        >
          Request a briefing
        </a>
      </div>
    </div>
  );
}

function Masthead(): ReactElement {
  return (
    <header className="flex flex-col gap-[16px]">
      <div className="flex justify-between border-b border-ink pb-[8px]">
        <Classification />
        <Classification />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[10px] pt-[6px]">
          {/* The original chevron artwork; never redraw it. */}
          <img
            src="/gator-chevron.png"
            alt=""
            aria-hidden="true"
            width={293}
            height={293}
            className="size-[26px]"
          />
          <span className="text-[23px] font-bold tracking-[0.01em]">GATOR</span>
          <span className="text-[13px] text-muted">
            General AI Training &amp; Operational Readiness
          </span>
        </div>
        <div className="text-right font-mono text-[12px] uppercase leading-[17px] tracking-[0.12em] text-muted">
          <div>Capability overview</div>
          <div>Cyber qualification platform</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[24px]">
        <h1 className="text-[39px] font-bold leading-[43px] tracking-[-0.02em]">
          {SITE_HEADLINE[0]}
          <br />
          {SITE_HEADLINE[1]}
        </h1>
        <div className="flex shrink-0 items-center gap-[12px] border-l-4 border-green pl-[12px]">
          <span className="text-[50px] font-bold leading-[50px]">
            {HEADLINE_STAT.value}
          </span>
          <div className="text-[12.5px] leading-[17px]">
            {HEADLINE_STAT.lines.map((line) => (
              <div key={line} className="font-semibold">
                {line}
              </div>
            ))}
            <div>{HEADLINE_STAT.note}</div>
          </div>
        </div>
      </div>

      <p className="text-[13.5px] leading-[21px] text-body">{SITE_LEAD}</p>
    </header>
  );
}

function Platform(): ReactElement {
  return (
    <section className="flex flex-col gap-[10px]">
      <Label>The platform</Label>
      <div className="grid grid-cols-2 gap-x-[28px] gap-y-[14px]">
        {MODULES.map((m) => (
          <div key={m.title} className="border-t-2 border-green pt-[9px]">
            <h3 className="pb-[3px] text-[14px] font-semibold">{m.title}</h3>
            <p className={BODY}>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Deployment(): ReactElement {
  return (
    <section className="flex flex-col gap-[10px] rounded-[4px] border border-hairline bg-tint px-[22px] py-[16px]">
      <Label>Deploy your way</Label>
      <div className={`grid grid-cols-3 gap-x-[24px] ${BODY}`}>
        {DEPLOYMENT_MODES.map((mode) => (
          <p key={mode.title}>
            <span className="font-semibold text-ink">{mode.title}</span>{" "}
            {mode.body}
          </p>
        ))}
      </div>
      <ul className="flex gap-[8px]" aria-label="Compliance">
        {COMPLIANCE_BADGES.map((badge) => (
          <li
            key={badge}
            className="border border-rule bg-paper px-[8px] py-[2px] font-mono text-[11px] font-medium tracking-[0.04em] text-ink"
          >
            {badge}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Practice(): ReactElement {
  return (
    <section className="flex flex-col gap-[10px]">
      <Label>One evaluation, end to end</Label>
      <div className="grid grid-cols-3 gap-x-[24px]">
        {STEPS.map((step) => (
          <div key={step.title} className="border-t border-rule pt-[9px]">
            <h3 className={`${MONO} pb-[5px] uppercase text-green-ink`}>
              {step.title}
            </h3>
            <p className={BODY}>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Agents(): ReactElement {
  return (
    <section className="flex items-center gap-[18px] rounded-[4px] bg-ink px-[22px] py-[13px] text-on-dark">
      <h2
        className={`${MONO} shrink-0 uppercase tracking-[0.16em] text-green`}
      >
        {AGENTS.label}
      </h2>
      <p className="text-[13px] leading-[19px]">
        <span className="font-semibold">{AGENTS.lead}</span> {AGENTS.body}
      </p>
    </section>
  );
}

function Ask(): ReactElement {
  return (
    <section className="flex flex-col gap-[6px] border-l-4 border-green bg-green-tint px-[22px] py-[13px]">
      <Label>Request a briefing</Label>
      <p className="text-[14px] leading-[21px]">
        {ASK}{" "}
        <a href={BRIEFING_HREF} className={LINK}>
          {SUPPORT_EMAIL}
        </a>
      </p>
    </section>
  );
}

function Colophon(): ReactElement {
  return (
    <footer className="flex flex-col gap-[12px]">
      <div className="flex items-end justify-between">
        <div className="font-mono text-[12px] leading-[17px] text-muted">
          <div>Patent pending</div>
          <div>info.gogator.ai</div>
        </div>
        <div className="text-right text-[13px] leading-[19px]">
          <div className="font-bold">GOGATOR INC</div>
          <div>
            <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
              {SUPPORT_EMAIL}
            </a>{" "}
            ·{" "}
            <a href={APP_URL} className={LINK}>
              {APP_LABEL}
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Classification />
      </div>
    </footer>
  );
}

export default function App(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-fit flex-col items-center gap-[20px] bg-desk px-[24px] py-[24px] font-sans antialiased print:block print:min-h-0 print:bg-paper print:p-0">
      <Toolbar />
      <main
        id="sheet"
        className="flex h-[1056px] w-[816px] shrink-0 flex-col justify-between overflow-hidden bg-paper px-[48px] pb-[22px] pt-[26px] text-ink"
      >
        <Masthead />
        <Platform />
        <Deployment />
        <Practice />
        <Agents />
        <Ask />
        <Colophon />
      </main>
    </div>
  );
}
