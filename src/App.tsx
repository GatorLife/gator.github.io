import type { ReactNode } from 'react';

/* ---------------------------------------------------------------------------
   Copy is lifted verbatim from GATOR_Capability_Overview.pdf. Keeping it as
   data at the top of the file means content edits never touch the layout.
--------------------------------------------------------------------------- */

const SITE_URL = 'https://gogator.ai';
const SUPPORT_EMAIL = 'Support@GoGATOR.ai';

const HERO =
  'The only platform to train, evaluate, and assess cyber operators, in one system, at scale.';

const PROBLEM =
  "Cyber units struggle to measure operator readiness. Evaluations aren't standardized, ranges aren't threat representative, and skill decay goes untracked, leaving mission capability in question.";

/* Row-major order, which renders column-major in the two-column grid exactly as
   the flyer lays it out. */
const DELIVERABLES = [
  {
    title: 'Threat-Representative Ranges',
    body: 'Built from real threat intel, CISA advisories, and MITRE ATT&CK Framework. Ready in minutes, not days.',
  },
  {
    title: 'Instant Training Recommendations',
    body: 'Operators scored against JQR standards automatically. Every result generates a tailored training plan instantly.',
  },
  {
    title: 'Commander Dashboard',
    body: 'Individual and unit readiness, live. Skill gaps by Cyber Work Role. Defensible readiness metrics.',
  },
  {
    title: 'One Operator Lifecycle',
    body: 'Mission planning, training, and formal evaluation in a single system, with no tools to stitch together.',
  },
];

const READINESS_PROFILE =
  "Every evaluation updates a persistent record of what each operator knows and where skills are decaying, then generates the next training recommendation instantly, aligned to CYBERCOM 2.0's mandate for domain mastery.";

const WHY = [
  'Built by a cyber operator, for cyber operators',
  'No operator data leaves the enclave; CUI-ready from day one',
  'Mapped to JQR / RTM / Cyber Work Role, not generic cyber training',
  'Adds real-time assessment to your current range',
];

const COMPLIANCE = [
  'NIST 800-171',
  'CMMC LVL 2',
  'IL5 GOVCLOUD',
  'LLM AGNOSTIC',
  'CONTAINERIZED DEPLOYMENT',
  'ALL CLASSIFICATIONS',
];

const OPERATIONAL_STATUS =
  'Piloted across several Active Duty and Air National Guard Cyber Operating Squadrons.';

const FOOTER_QUOTE = "“From 'I think we're ready' to 'I know we're ready.'”";

/* ------------------------------------------------------------------------- */

/* The GATOR chevron, traced from the two filled triangles in the flyer's page
   content stream (upper wing #5E9E33, lower wing #7AC943). Drawn as vector
   rather than using assets/GATOR_Icon.png, which is a different, glossy
   beveled rendering of the mark and cannot match. */
function ChevronMark() {
  return (
    <svg
      viewBox="0 0 39.71 38"
      className="h-[3.9rem] w-[4.1rem] shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="var(--color-accent-dim)" d="M39.71 0 H28.31 L0 19 H11.4 Z" />
      <path fill="var(--color-accent)" d="M39.71 38 H28.31 L0 19 H11.4 Z" />
    </svg>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-9 md:mb-11">
      <h2 className="inline-block border-b-2 border-accent-dim pr-5 pb-1.5 font-semibold uppercase text-accent text-[1.05rem] md:text-[1.15rem]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function BodyCopy({ children }: { children: ReactNode }) {
  return (
    <p className="body-copy max-w-[52rem] text-muted text-[0.95rem] md:text-base leading-relaxed">
      {children}
    </p>
  );
}

function Classification() {
  return (
    <p className="font-mono uppercase text-classified text-[0.75rem]">
      Unclassified
    </p>
  );
}

function ContactLines({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-contact text-[0.9rem]">
        <a href={SITE_URL} className="transition-colors hover:text-accent">
          GoGATOR.ai
        </a>
        <span className="px-1.5 text-contact/60">|</span>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="transition-colors hover:text-accent">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div id="app-root" className="min-h-screen bg-ink text-body">
      <header className="border-b-[3px] border-accent bg-band">
        <div className="page band-inner flex flex-col gap-5 py-7 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <ChevronMark />
            <div>
              <p className="font-bold leading-none tracking-tight text-accent text-[2.6rem]">
                GATOR
              </p>
              <p className="mt-2 text-body-dim text-[0.95rem]">
                General AI Training &amp; Operational Readiness
              </p>
            </div>
          </div>

          <div className="band-contact flex flex-col md:items-end md:text-right">
            <Classification />
            <ContactLines className="mt-2.5" />
            <p className="text-contact text-[0.9rem]">
              GOGATOR INC<span className="px-1.5 text-contact/60">|</span>Patent Pending
            </p>
          </div>
        </div>
      </header>

      <main className="page">
        <div className="hero my-10 border-l-4 border-accent pl-5 md:my-12 md:pl-6">
          <h1 className="hero-title max-w-[54rem] font-semibold leading-[1.25] text-body text-[1.75rem] md:text-[2.15rem]">
            {HERO}
          </h1>
        </div>

        <Section title="The Problem">
          <BodyCopy>{PROBLEM}</BodyCopy>
        </Section>

        <Section title="What GATOR Delivers">
          <ul className="deliver-grid grid gap-x-12 gap-y-6 md:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <li key={item.title} className="deliver-item flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <div>
                  <h3 className="font-semibold text-accent text-[1rem] md:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-muted text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="A Living Readiness Profile">
          <BodyCopy>{READINESS_PROFILE}</BodyCopy>
        </Section>

        <Section title="Why GATOR">
          <ul className="space-y-2.5">
            {WHY.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-[0.42rem] h-2 w-2 shrink-0 bg-accent" />
                <span className="text-muted text-[0.95rem] md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Security & Compliance">
          <ul className="pill-row flex flex-wrap gap-2.5">
            {COMPLIANCE.map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent-dim bg-panel px-3.5 py-1.5 font-mono uppercase text-accent text-[0.75rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Operational Status">
          <BodyCopy>{OPERATIONAL_STATUS}</BodyCopy>
        </Section>
      </main>

      <footer className="mt-12 border-t-[3px] border-accent bg-band">
        <div className="page footer-inner flex flex-col gap-4 py-7 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-accent text-[0.95rem]">GOGATOR INC</p>
            <ContactLines className="mt-1" />
          </div>
          <div className="footer-quote flex flex-col md:items-end md:text-right">
            <p className="italic text-muted text-[0.9rem]">{FOOTER_QUOTE}</p>
            <div className="mt-1.5">
              <Classification />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
