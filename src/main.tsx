import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Self-hosted IBM Plex, the same faces the product uses. Deliberately not
// loaded from Google Fonts: this site is opened on DoD networks that may block
// fonts.googleapis.com, which would silently fall back to system sans. Latin
// subsets only; the site is English-only.
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "@fontsource/ibm-plex-sans/latin-700.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
