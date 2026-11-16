import type { ReactElement } from "react";
import { PROOF_STATS, QUOTES } from "../content";
import { EYEBROW, SECTION, SectionHeader, cn } from "../ui";

export default function Proof(): ReactElement {
  return (
    <section
      id="practice"
      className={cn(SECTION, "scroll-mt-16 border-t border-border")}
    >
      <SectionHeader
        index="03"
        eyebrow="In practice"
        title="End-to-end evaluation, completed in minutes."
        lead="From scenario build to scored record, without the days of range setup."
      />
      <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {PROOF_STATS.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col gap-2 bg-background p-6"
          >
            <dt className="text-5xl font-normal tracking-[-0.03em] text-foreground">
              {stat.value}
            </dt>
            <dd className="text-sm text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
      <div className="grid gap-6 md:grid-cols-2">
        {QUOTES.map((quote) => (
          <figure
            key={quote.attribution}
            className="flex flex-col gap-4 border-l border-border pl-6"
          >
            <blockquote className="text-2xl leading-tight tracking-[-0.015em] text-foreground">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <figcaption className={EYEBROW}>{quote.attribution}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
