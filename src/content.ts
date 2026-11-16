// All copy for the sheet. It follows the product homepage (GatorLife/Gator:
// apps/client-server/src/components/landing/home-content.ts and
// src/lib/site-copy.ts), cut to fit one page. When that copy changes, re-sync
// this file; App.tsx holds layout only.

export const SITE_HEADLINE = ["One standard for", "operators and agents."];

// The gap the platform closes, then what it does about it.
export const SITE_LEAD =
  "Ranges take days to stand up and evaluations wait on an examiner. GATOR builds live cyber ranges from current threat intelligence and grades every action on them to your qualification standard.";

export const HEADLINE_STAT = {
  value: "5",
  lines: ["Hours of evaluator time", "saved per evaluation"],
  note: "Under 10 min end to end",
};

export const APP_URL = "https://gogator.ai";
export const APP_LABEL = "GoGATOR.ai";
export const SUPPORT_EMAIL = "support@gogator.ai";
export const BRIEFING_HREF = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("GATOR briefing request")}`;

export interface Item {
  title: string;
  body: string;
}

// The platform as four modules, in the order an evaluation uses them.
export const MODULES: Item[] = [
  {
    title: "Range",
    body: "A live network for every evaluation, built in minutes by an agent from your scenario.",
  },
  {
    title: "Adversary",
    body: "Current threat reporting, recreated on the range. Packet captures, logs and host artifacts carry the indicators.",
  },
  {
    title: "Grader",
    body: "Every operator action, graded to the standard. Correct, partial or incorrect, with the evidence attached.",
  },
  {
    title: "Command",
    body: "Readiness a commander can defend. Qualification, currency and skill decay by operator, team and work role.",
  },
];

export const DEPLOYMENT_MODES: Item[] = [
  {
    title: "Sovereign.",
    body: "Runs on your hardware, fully isolated from the internet. Models and data never leave.",
  },
  {
    title: "Cloud.",
    body: "Hosted for you in IL5 government cloud, with elastic ranges and unlimited evaluations.",
  },
  {
    title: "Hybrid.",
    body: "Ranges inside your boundary, orchestration in the cloud. Data stays where you choose.",
  },
];

export const COMPLIANCE_BADGES: string[] = [
  "IL5",
  "NIST SP 800-171",
  "JCT&CS aligned",
  "Air-gap capable",
];

// One evaluation, start to finish.
export const STEPS: Item[] = [
  {
    title: "01 / Build",
    body: "The evaluator builds a scenario from real-world intel, tunes it to the work role and assigns it.",
  },
  {
    title: "02 / Evaluate",
    body: "An agent generates the range and stages the attack. The operator works it in the tools they already use.",
  },
  {
    title: "03 / Score",
    body: "Answers are scored against ground truth and the record updates. The evaluator and command are notified.",
  },
];

// Not fielded: always shown under its "In development" label.
export const AGENTS = {
  label: "In development",
  lead: "Operators and agents, graded as a team.",
  body: "AI agents will be graded on a threat-representative range against the same line items as your qualified operators.",
};

export const ASK =
  "Bring a threat your operators, or your agents, should catch. We'll recreate it on a live range and evaluate your team.";
