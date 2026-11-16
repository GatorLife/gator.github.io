// A condensed version of the product homepage at gogator.ai: same tokens, type
// and copy, without the scroll hero, the range replay or the agents section.
import type { ReactElement } from "react";
import Closing from "./sections/Closing";
import Deployment from "./sections/Deployment";
import Hero from "./sections/Hero";
import Platform from "./sections/Platform";
import Proof from "./sections/Proof";
import SiteFooter from "./sections/SiteFooter";
import SiteNav from "./sections/SiteNav";

export default function App(): ReactElement {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteNav />
      <main>
        <Hero />
        <Platform />
        <Deployment />
        <Proof />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}
