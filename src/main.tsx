import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PrivateGate from "./PrivateGate";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivateGate>
      <App />
    </PrivateGate>
  </StrictMode>,
);
