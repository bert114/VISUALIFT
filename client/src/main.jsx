import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "./scss/main.scss";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
