import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./core/themes/theme-provider";
import App from "./App";
import { GlobalStyles } from "./core/styles/global.styles";

import { BrowserRouter } from "react-router-dom";
import Providers from "./core/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ThemeProvider>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
