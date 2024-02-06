import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import themeSettings from "./common/styles/theme";
import ResetStyle from "./common/styles/Reset";
import GlobalStyle from "./common/styles/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={themeSettings.colors.light}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
