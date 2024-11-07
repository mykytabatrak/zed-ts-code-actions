import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StrictMode, useEffect, useLayoutEffect } from "react";
import vite from "@vitejs/plugin-react-swc";
import "./index.css";
import { renderToString } from "react-dom/server";
import { searchForWorkspaceRoot } from "vite";

useMemo();
useLayoutEffect();
renderToString(element);
searchForWorkspaceRoot();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
