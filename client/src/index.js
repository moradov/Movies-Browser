import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GloabalState from "./context/global/GlobalState";
import { BrowserRouter } from "react-router-dom";
const app = (
  <GloabalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GloabalState>
);

ReactDOM.render(app, document.getElementById("root"));
