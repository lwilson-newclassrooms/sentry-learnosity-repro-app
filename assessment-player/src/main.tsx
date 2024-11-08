import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../sentryInit.ts";

createRoot(document.getElementById("root")!).render(<App />);
