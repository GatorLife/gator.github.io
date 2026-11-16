import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_TELEMETRY, SITE_HEADLINE, SITE_LEAD } from "../content";
import { BriefingButton, Cursor, EYEBROW, cn } from "../ui";

// The headline's last word travels with the cursor, so the cursor never wraps
// onto a line of its own.
const HEADLINE_SPLIT = SITE_HEADLINE.lastIndexOf(" ");
const HEADLINE_START = SITE_HEADLINE.slice(0, HEADLINE_SPLIT);
const HEADLINE_END = SITE_HEADLINE.slice(HEADLINE_SPLIT + 1);

// The hero has corner ticks where every other section has side rails.
const CORNERS = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export default function Hero(): ReactElement {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-10 md:py-10">
      <div className="relative flex flex-col gap-10 p-5 md:gap-14 md:p-10">
        {CORNERS.map((corner) => (
          <span
            key={corner}
            aria-hidden="true"
            className={cn("absolute size-4 border-muted-foreground/60", corner)}
          />
        ))}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <span className={EYEBROW}>Cyber qualification platform</span>
            <h1 className="text-[2.5rem] font-normal leading-[1.02] tracking-[-0.035em] text-foreground md:text-7xl">
              {HEADLINE_START}{" "}
              <span className="whitespace-nowrap">
                {HEADLINE_END} <Cursor />
              </span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground md:text-xl">
              {SITE_LEAD}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <BriefingButton large />
              <a
                href="#platform"
                className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                See how it works <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          <img
            src="/hero-still.jpg"
            alt="Three network zones, cloud, hybrid and sovereign, joined into one range with operators and agents working inside them."
            width={1920}
            height={1080}
            // The still has wide empty margins; 4:3 crops them so the network
            // fills its column.
            className="aspect-[4/3] w-full object-cover lg:col-span-6"
          />
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.14em] md:grid-cols-3">
          {HERO_TELEMETRY.map((r) => (
            <div key={r.label} className="flex flex-col gap-1">
              <dt className="text-muted-foreground">{r.label}</dt>
              <dd className="text-foreground">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
