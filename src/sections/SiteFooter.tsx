import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  BRIEFING_HREF,
  SECTION_LINKS,
  SIGN_IN_HREF,
  SUPPORT_EMAIL,
} from "../content";
import { EYEBROW, Wordmark } from "../ui";

const FOOTER_LINK =
  "inline-flex min-h-11 items-center gap-1 text-lg text-foreground transition-colors hover:text-primary md:min-h-0";

export default function SiteFooter(): ReactElement {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 md:border-x md:border-border md:px-10">
        <div className="grid gap-10 py-16 md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-6">
            <Wordmark />
            <span className="max-w-xs text-sm text-muted-foreground">
              General AI Training &amp; Operational Readiness
            </span>
          </div>
          <nav
            aria-label="Sections"
            className="flex flex-col gap-3 md:col-span-3"
          >
            <span className={EYEBROW}>Explore</span>
            {SECTION_LINKS.map(([label, href]) => (
              <a key={href} href={href} className={FOOTER_LINK}>
                {label}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Get started"
            className="flex flex-col gap-3 md:col-span-3"
          >
            <span className={EYEBROW}>Get started</span>
            <a href={BRIEFING_HREF} className={FOOTER_LINK}>
              Request a briefing <ArrowUpRight className="size-4" />
            </a>
            <a href={SIGN_IN_HREF} className={FOOTER_LINK}>
              Sign in
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-border py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} GOGATOR INC / GATOR</span>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="transition-colors hover:text-foreground"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
