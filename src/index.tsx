import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyled from "../src/styles/global";
import Provider from "./provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyled />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
