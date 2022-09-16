import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./context/Theme";
import { GlobalStyle } from "./theme/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
