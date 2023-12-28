import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { AssistantApp } from "./AssistantApp";
import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename="/">
    <React.StrictMode>
      <AssistantApp />
    </React.StrictMode>
  </HashRouter>
);
