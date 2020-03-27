import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ListDemoApp from "./ListDemoApp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ListDemoApp></ListDemoApp>
  </React.StrictMode>,
  document.getElementById("root")
);
