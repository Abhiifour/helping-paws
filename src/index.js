import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ScrollToTop from "./helper";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
  <ScrollToTop/>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </HashRouter>
  
);
