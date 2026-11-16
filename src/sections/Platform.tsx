import type { ReactElement } from "react";
import { MODULES } from "../content";
import {
  EYEBROW,
  PillarDot,
  SECTION,
  SectionHeader,
  StatementRow,
  cn,
} from "../ui";

export default function Platform(): ReactElement {
  return (
    <section
      id="platform"
      className={cn(SECTION, "scroll-mt-16 border-t border-border")}
    >
      <SectionHeader
        index="01"
        eyebrow="Platform"
        title="Build the range. Capture the work. Grade to the standard."
        lead="Four modules, fielded today."
      />
      <div className="flex flex-col">
        {MODULES.map((m, n) => (
          <article
            key={m.id}
            id={m.id}
            className="flex scroll-mt-16 flex-col gap-4 border-t border-border py-8 last:pb-0 md:gap-10 md:py-14"
          >
            <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-10">
              <div className="flex flex-col gap-4 md:col-span-7">
                <span className={cn(EYEBROW, "flex items-center gap-2")}>
                  <PillarDot id="agentic" />
                  {n + 1} of {MODULES.length} · {m.eyebrow}
                </span>
                <h3 className="text-5xl font-normal leading-none tracking-[-0.035em] text-foreground md:text-7xl">
                  {m.name}
                </h3>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5">
                <p className="text-2xl leading-tight text-foreground">
                  {m.claim}
                </p>
                <p className="text-[15px] leading-6 text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </div>
            <StatementRow items={m.capabilities} />
          </article>
        ))}
      </div>
    </section>
  );
}
