import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

const media = window.matchMedia("(prefers-color-scheme: dark)");
document.documentElement.classList.toggle("dark", media.matches);

media.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark", e.matches);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
