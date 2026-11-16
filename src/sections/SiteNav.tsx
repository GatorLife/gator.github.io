import type { ReactElement } from "react";
import { SECTION_LINKS, SIGN_IN_HREF } from "../content";
import { ACTION, ACTION_OUTLINE, BriefingButton, Wordmark, cn } from "../ui";

export default function SiteNav(): ReactElement {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-border bg-background">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 md:border-x md:border-border md:px-10">
        <a href="/" aria-label="GATOR home">
          <Wordmark />
        </a>
        <div className="hidden items-center gap-7 whitespace-nowrap text-sm lg:flex">
          {[...SECTION_LINKS, ["Contact", "#contact"] as const].map(
            ([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ),
          )}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={SIGN_IN_HREF}
            className={cn(ACTION, ACTION_OUTLINE, "hidden h-9 px-4 sm:inline-flex")}
          >
            Sign in
          </a>
          <BriefingButton />
        </div>
      </nav>
    </header>
  );
}
