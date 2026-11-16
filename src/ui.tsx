// Shared primitives and class strings. The strings are copied from the product
// homepage (HomeLanding.tsx in GatorLife/Gator) so the two pages stay in step.
import type { ReactElement, ReactNode } from "react";
import { BRIEFING_HREF } from "./content";
import type { Capability, PillarId } from "./content";

export function cn(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export const EYEBROW =
  "font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground";
// Sections carry hairline rails on their left and right edges; stacked, they
// read as one continuous blueprint grid down the page.
export const SECTION =
  "mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-14 md:gap-12 md:border-x md:border-border md:px-10 md:py-24";
// Display type is regular weight, large and tightly tracked: size, not
// weight, carries the hierarchy.
export const HEADING =
  "text-4xl font-normal leading-[1.05] tracking-[-0.025em] text-foreground md:text-6xl";
// Square, mono, uppercase: the shape every action on the page takes.
export const ACTION =
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
export const ACTION_PRIMARY =
  "bg-primary text-primary-foreground hover:bg-primary/90";
export const ACTION_OUTLINE =
  "border border-border bg-background text-foreground hover:bg-primary/10 hover:text-primary";

// The original GATOR chevron artwork. Its sharp, square-cut silhouette is the
// mark; don't redraw it as an SVG or a rounded stroke.
export function GatorMark(): ReactElement {
  return (
    <img
      src="/gator-chevron.png"
      alt=""
      aria-hidden="true"
      width={293}
      height={293}
      className="size-6"
    />
  );
}

export function Wordmark(): ReactElement {
  return (
    <span className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[0.1em] text-foreground">
      <GatorMark />
      GATOR
    </span>
  );
}

// Each pillar's marker colour. Markers are small dots only; the colour never
// sits behind text.
const PILLAR_DOT: Record<PillarId, string> = {
  agentic: "bg-ai-accent",
  sovereign: "bg-warning",
  cloud: "bg-info",
};

export function PillarDot({ id }: { id: PillarId }): ReactElement {
  return (
    <span
      aria-hidden="true"
      className={cn("size-2 shrink-0 rounded-[2px]", PILLAR_DOT[id])}
    />
  );
}

export function Tag({ children }: { children: ReactNode }): ReactElement {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-xs font-medium tracking-wide text-foreground">
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
}): ReactElement {
  return (
    <div className="flex max-w-2xl flex-col gap-5">
      <span className={EYEBROW}>
        <span className="text-foreground">{index}</span> / {eyebrow}
      </span>
      <h2 className={HEADING}>{title}</h2>
      {lead && <p className="text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}

// A terminal block cursor: the product homepage's accent.
export function Cursor(): ReactElement {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[0.78em] w-[0.42em] translate-y-[0.06em] bg-primary animate-pulse motion-reduce:animate-none"
    />
  );
}

// Three short statements in a ruled row.
export function StatementRow({ items }: { items: Capability[] }): ReactElement {
  return (
    <ul className="grid border-t border-border sm:grid-cols-3">
      {items.map((c) => (
        <li
          key={c.title}
          className="flex flex-col gap-1 border-b border-border py-3 last:border-b-0 sm:gap-2 sm:border-b-0 sm:border-l sm:px-5 sm:py-5 sm:first:border-l-0 sm:first:pl-0"
        >
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground">
            {c.title}
          </span>
          <span className="text-[15px] leading-6 text-muted-foreground">
            {c.body}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function BriefingButton({ large }: { large?: boolean }): ReactElement {
  return (
    <a
      href={BRIEFING_HREF}
      className={cn(ACTION, ACTION_PRIMARY, large ? "h-10 px-5" : "h-9 px-4")}
    >
      Request a briefing
    </a>
  );
}
