import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = evt => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = evt => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then(data => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then(res => setLoggedIn(true));
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
export default App;

// Q - Did this logout involve the server?
// A - No it didn't. We just cleared the local storage in the browser.
// as seen in the apiFacade: "localStorage.removeItem("jwtToken");"
//
// Q - Is the token (if kept somewhere, stil valid?)
// A - Yes it is. Because the token has a life time of 30 minutes,
// given from the server. We can even test this if we copy the contens of the
// token and use Postman.
//
// Q - If your answer to the question above was yes, is this a problem?,
// and if, how could it have been solved?
// A - Yes it is a problem if someone would have installed a program on
// our maching and used it to copy the token.. then like explained above
// They could enter via postman and act as us.
//
// A solution could potentially be when logging out, to send a request
// to the server, and edit the existing timer for the token to 0 seconds?
// I don't know if this is possible, but it might be?
