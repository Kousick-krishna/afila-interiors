import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/responsive.css";
import logo from "./assets/images/afila-logo.png";

import App from "./App.jsx";

document.querySelector('link[rel="icon"]').href = logo;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);