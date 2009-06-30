import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import GloabalState from "../src/context/global/GlobalState";
const app = (
  <BrowserRouter>
    <GloabalState>
      <App />
    </GloabalState>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
