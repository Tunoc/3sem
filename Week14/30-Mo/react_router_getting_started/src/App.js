import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { Count } from "./Count";
import { Clock } from "./Clock";
import "./style1.css";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/count">
              <Count propValue="1"></Count>
            </Route>
            <Route path="/clock">
              <Clock></Clock>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the start page.</p>
    </div>
  );
}
