import React from "react";
export function Login({ isLoggedIn, loginMsg, setLoginStatus }) {
  const handleLogin = () => {
    setLoginStatus(!isLoggedIn);
  };
  return (
    <div>
      <h2>{loginMsg}</h2>
      <p>This is a login page simulation. After pressing the login button,</p>
      <p>2 new fields will apear in the top bar.</p>
      <br></br>
      <button onClick={handleLogin}>{loginMsg}</button>
    </div>
  );
}
