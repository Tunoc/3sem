import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import countryFacade from "./countryFacade";
import "./App.css";

const App = props => {
  const [label, setLabel] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      let dataLabel = await countryFacade.getLabels();
      let dataCountries = await countryFacade.getCountries();
      setLabel(dataLabel);
      setCountry(dataCountries);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <CountryTable label={label} country={country} />
      </div>
    </div>
  );
};

export default App;
