import type { ReactElement } from "react";
import { COMPLIANCE_BADGES, DEPLOYMENT_MODES } from "../content";
import { EYEBROW, PillarDot, SECTION, SectionHeader, Tag, cn } from "../ui";

const MODE_ROWS = [
  ["Models", "models"],
  ["Ranges", "ranges"],
  ["Data", "data"],
] as const;

export default function Deployment(): ReactElement {
  return (
    <section
      id="deployment"
      className={cn(SECTION, "scroll-mt-16 border-t border-border")}
    >
      <SectionHeader
        index="02"
        eyebrow="Deployment"
        title="Deploy your way."
        lead="Local, cloud or hybrid. The same platform, deployed to support your requirements."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {DEPLOYMENT_MODES.map((mode) => (
          <article
            key={mode.label}
            // On md+ each card spans six rows of the parent grid, so the bodies
            // and every spec row line up across cards whatever wraps.
            className="flex flex-col gap-3 rounded-md border border-border bg-card p-6 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-y-0"
          >
            <Tag>
              {mode.markers.map((m) => (
                <PillarDot key={m} id={m} />
              ))}
              {mode.label}
            </Tag>
            <h3 className="text-2xl font-normal tracking-[-0.015em] text-foreground md:pt-3">
              {mode.title}
            </h3>
            <p className="grow text-[15px] leading-6 text-muted-foreground md:pb-3 md:pt-3">
              {mode.body}
            </p>
            <dl className="flex flex-col md:contents">
              {MODE_ROWS.map(([label, key]) => (
                <div
                  key={key}
                  className="grid grid-cols-[5rem_1fr] items-baseline gap-3 border-t border-border py-3 last:pb-0"
                >
                  <dt className={EYEBROW}>{label}</dt>
                  <dd className="text-[15px] text-foreground">{mode[key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <ul className="flex flex-wrap gap-2.5" aria-label="Compliance">
        {COMPLIANCE_BADGES.map((badge) => (
          <li key={badge}>
            <Tag>{badge}</Tag>
          </li>
        ))}
      </ul>
    </section>
  );
}
