//React file
import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App";
import "./style.css";

const app = document.getElementById("app");

ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
