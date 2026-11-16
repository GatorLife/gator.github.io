import type { ReactElement } from "react";
import { BriefingButton, Cursor, SECTION, cn } from "../ui";

export default function Closing(): ReactElement {
  return (
    <section
      id="contact"
      className={cn(SECTION, "scroll-mt-16 border-t border-border")}
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <h2 className="text-6xl font-normal leading-[0.92] tracking-[-0.045em] text-foreground sm:text-7xl md:shrink-0 md:text-8xl lg:text-[8.5rem]">
          Train it.
          <br />
          {/* Kept on one line so the cursor never wraps under the text. */}
          <span className="whitespace-nowrap">
            Prove it. <Cursor />
          </span>
        </h2>
        <div className="flex max-w-sm flex-col items-start gap-6">
          <p className="text-lg text-muted-foreground">
            Bring a threat your operators, or your agents, should catch.
            We&apos;ll recreate it on a live range and evaluate your team.
          </p>
          <BriefingButton large />
        </div>
      </div>
    </section>
  );
}
