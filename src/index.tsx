// ./src/app.js
import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from 'styled-components';

import App from './components/App'

import themeSettings from './styled/theme';
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeSettings.variant.light}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);