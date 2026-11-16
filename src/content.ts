// All copy for the site. It is lifted verbatim from the product homepage
// (GatorLife/Gator: apps/client-server/src/components/landing/home-content.ts
// and src/lib/site-copy.ts). When that copy changes, re-sync this file; no
// layout file holds copy of its own.

export const SITE_HEADLINE = "One standard for operators and agents.";
export const SITE_LEAD =
  "Live cyber ranges built from current threat intelligence. Every action on them, graded to your qualification standard.";

export const APP_URL = "https://gogator.ai";
export const SIGN_IN_HREF = `${APP_URL}/login`;
export const SUPPORT_EMAIL = "support@gogator.ai";
export const BRIEFING_HREF = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("GATOR briefing request")}`;

// The page's sections, shared by the header and the footer so the two never
// list different destinations.
export const SECTION_LINKS = [
  ["Platform", "#platform"],
  ["Deployment", "#deployment"],
  ["In practice", "#practice"],
] as const;

export type PillarId = "agentic" | "sovereign" | "cloud";

export interface DeploymentMode {
  label: string;
  markers: PillarId[];
  title: string;
  body: string;
  models: string;
  ranges: string;
  data: string;
}

export const DEPLOYMENT_MODES: DeploymentMode[] = [
  {
    label: "Sovereign",
    markers: ["sovereign"],
    title: "Inside your boundary",
    body: "Runs on your hardware, fully isolated from the internet.",
    models: "Local, no egress",
    ranges: "On your cluster",
    data: "Your boundary only",
  },
  {
    label: "Cloud",
    markers: ["cloud"],
    title: "Managed at scale",
    body: "Hosted for you, with unlimited evaluations.",
    models: "Managed",
    ranges: "Elastic, on demand",
    data: "IL5 government cloud",
  },
  {
    label: "Hybrid",
    markers: ["sovereign", "cloud"],
    title: "Both, per evaluation",
    body: "Ranges inside your boundary, orchestration in the cloud.",
    models: "Either",
    ranges: "Local, cloud-orchestrated",
    data: "Stays where you choose",
  },
];

export interface Capability {
  title: string;
  body: string;
}

export interface PlatformModule {
  id: string;
  eyebrow: string;
  name: string;
  claim: string;
  body: string;
  capabilities: Capability[];
}

// The platform as four agentic modules, in the order an evaluation uses them.
export const MODULES: PlatformModule[] = [
  {
    id: "range",
    eyebrow: "Dynamic environments",
    name: "Range",
    claim: "A live network for every evaluation, built in minutes.",
    body: "An agent turns a scenario into a running network of subnets, hosts, services and users.",
    capabilities: [
      {
        title: "Isolated",
        body: "One sandboxed range for each operator or a whole team.",
      },
      {
        title: "Instrumented",
        body: "Evaluated on the tools you use, from terminal to SIEM.",
      },
      {
        title: "Alive",
        body: "Simulated users and services give the attack traffic to hide in.",
      },
    ],
  },
  {
    id: "adversary",
    eyebrow: "Threat generation",
    name: "Adversary",
    claim: "Current threat reporting, recreated on the range.",
    body: "Agents ingest real-world threat intelligence and recreate the attack and its indicators of compromise.",
    capabilities: [
      {
        title: "Intelligence-driven",
        body: "Dynamically link your evaluation to the latest threat actor intelligence reports.",
      },
      {
        title: "Captured",
        body: "Packet captures, logs and host artifacts carry the indicators.",
      },
      {
        title: "Known",
        body: "Every indicator is ingested from current threat intel and recorded as ground truth.",
      },
    ],
  },
  {
    id: "grader",
    eyebrow: "Agentic grading",
    name: "Grader",
    claim: "Every operator action, graded to the standard.",
    body: "Answers and activity in packet captures, the command line and logs, scored against ground truth and your requirements.",
    capabilities: [
      {
        title: "Tuned model",
        body: "A local AI model scores every response against the ground truth.",
      },
      {
        title: "Clear verdicts",
        body: "Correct, partial or incorrect, with the evidence attached.",
      },
      {
        title: "Examiner remarks",
        body: "Drafted from the results, ready for review and sign-off.",
      },
    ],
  },
  {
    id: "command",
    eyebrow: "Readiness reporting",
    name: "Command",
    claim: "Readiness a commander can defend.",
    body: "Qualification, currency and skill decay by operator, team and work role.",
    capabilities: [
      {
        title: "By work role",
        body: "Aligned to USCYBERCOM roles and qualification levels.",
      },
      {
        title: "Current",
        body: "Updated the moment an evaluation is scored.",
      },
      {
        title: "Traceable",
        body: "Every action links to the requirement behind it.",
      },
    ],
  },
];

// Operator feedback from the pilot, attributed by role only: no names, ranks
// or units.
export interface Quote {
  text: string;
  attribution: string;
}

export const QUOTES: Quote[] = [
  {
    text: "GATOR gives us defensible readiness data, not just range time.",
    attribution: "Senior NCO, Cyber Operations",
  },
  {
    text: "Real-world cyber attacks we can evaluate on.",
    attribution: "Squadron Director of Operations",
  },
];

// The hero strip describes the hero still: three deployment zones on one
// network.
export const HERO_TELEMETRY: Array<{ label: string; value: string }> = [
  { label: "Range", value: "EVAL-0412" },
  { label: "Topology", value: `${DEPLOYMENT_MODES.length} ZONES · 1 NETWORK` },
  { label: "Zones", value: "CLOUD · HYBRID · SOVEREIGN" },
];

export const COMPLIANCE_BADGES: string[] = [
  "IL5",
  "NIST SP 800-171",
  "JCT&CS aligned",
  "Air-gap capable",
];

export interface ProofStat {
  value: string;
  label: string;
}

export const PROOF_STATS: ProofStat[] = [
  { value: "5 hours", label: "of evaluator time saved per evaluation" },
  { value: "Under 10 min", label: "end to end for one operator evaluation" },
];
