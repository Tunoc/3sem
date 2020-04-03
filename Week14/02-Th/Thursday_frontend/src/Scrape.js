import React, { useState } from "react";
export function Scrape() {
  const [scrape, setScrape] = useState([]);
  //const URL = "http://localhost:8080/webscraper/api/scrape";
  const URL = "http://localhost:8080/securitystarter/api/scrape";

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
      .then(data => setScrape(data));
  };

  return (
    <div>
      <h1>Scrape page</h1>
      <button onClick={fetchData}>Get scrape</button>
      <br></br>
      {scrape.map(currentScrape => {
        return (
          <div key={scrape.indexOf(currentScrape)}>
            {/* This way of setting the key uses the index of the array it is comming from.*/}
            <p>
              URL:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                /*Needs res because CORS and security issues*/
                href={currentScrape.url}
              >
                {currentScrape.url}
              </a>
            </p>
            <p>Title: {currentScrape.title}</p>
            <p>Div count: {currentScrape.divCount}</p>
            <p>Body count: {currentScrape.bodyCount}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
