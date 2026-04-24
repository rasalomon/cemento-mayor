import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/base/typography.css";
import "./styles/base/utilities.css";
import "./styles/globals.css";
import "./styles/components/header.css";
import "./styles/components/footer.css";
import "./styles/components/hero.css";
import "./styles/components/cards.css";
import "./styles/components/gallery.css";
import "./styles/components/form.css";
import "./styles/pages/home.css";
import "./styles/pages/product.css";
import "./styles/pages/services.css";
import "./styles/pages/gallery.css";
import "./styles/pages/about.css";
import "./styles/pages/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
