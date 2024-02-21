import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import { App } from "./components/App/App";
import { theme } from "components/constants/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
