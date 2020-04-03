import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Home } from "./Home";
import { Jokes } from "./Jokes";
import { Scrape } from "./Scrape";
import { Header } from "./Header";
import { Login } from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    history.push("/"); //Dosn't work like we were showed in the video..
  };
  return (
    <Router>
      <div className="App">
        <Header
          loginMsg={isLoggedIn ? "Logout" : "Login"}
          isLoggedIn={isLoggedIn}
        />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Route path="/scrape">
              <Scrape />
            </Route>
            <Route path="/login-out">
              <Login
                loginMsg={isLoggedIn ? "Logout" : "Login"}
                isLoggedIn={isLoggedIn}
                setLoginStatus={setLoginStatus}
              />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Path does not exist</h2>
    </div>
  );
}
