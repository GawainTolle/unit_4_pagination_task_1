import App from "./app";
import { createRoot } from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
     <React.StrictMode>
          <App />
     </React.StrictMode>
);
