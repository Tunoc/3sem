import React, { useState } from "react";
export function Jokes() {
  const [jokes, setJokes] = useState({});
  //const URL = "http://localhost:8080/jokeFetcher/api/jokes";
  const URL = "http://localhost:8080/securitystarter/api/jokes";

  const fetchData = () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    //options.headers["x-access-token"] = localStorage.getItem("jwtToken");
    fetch(URL, options)
      .then(handleHttpErrors)
      .then(data => setJokes(data));
  };

  return (
    <div>
      <h1>Jokes page</h1>
      <button onClick={fetchData}>Get jokes</button>
      <br></br>
      {Object.values(jokes).map((value, key) => (
        <p key={key}>{value}</p>
      ))}
    </div>
  );
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
