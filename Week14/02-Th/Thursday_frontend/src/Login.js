import React, { useState, useEffect } from "react";
import loginFacade from "./loginFacade";
export function Login({ isLoggedIn, loginMsg, setLoginStatus }) {
  const logout = () => {
    loginFacade.logout();
    setLoginStatus(false);
  };
  const login = (user, pass) => {
    loginFacade.login(user, pass).then(res => setLoginStatus(true));
  };
  return (
    <div>
      {!isLoggedIn ? (
        <LogIn login={login} loginMsg={loginMsg} />
      ) : (
        <LoggedIn logout={logout} loginMsg={loginMsg} />
      )}
    </div>
  );
}

function LogIn({ login, loginMsg }) {
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
      <h2>{loginMsg}</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>{loginMsg}</button>
      </form>
    </div>
  );
}
function LoggedIn({ logout, loginMsg }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    loginFacade.fetchData().then(data => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>{loginMsg}</h2>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <button onClick={logout}>{loginMsg}</button>
    </div>
  );
}
