import React, {useState} from 'react';
import './App.css';
import { Count } from './Count';
import { Clock } from './Clock';

function App() {
  return (
    <div className="App">
      <h1>25 We</h1>
      <p>1) Create a simple React component using the useState hook as described below</p>
      <Count propValue="1"></Count>
      <br></br>
      <br></br>
      <p>2) Create a simple React Component that can display time, and update the value every second as sketched below (date.toLocaleTimeString()):</p>
      <Clock></Clock>
      <br></br>
      <br></br>
      <p>3) Create a simple React Component that can fetch and display a Chuck Norris joke fetched from this API: https://api.chucknorris.io/ </p>
      <JokeAPI></JokeAPI>
    </div>
  );
}

function JokeAPI(){
  const[data, setData] = useState([]);
  function handleChange() {
    fetch("https://api.chucknorris.io/jokes/random", {headers: {Accept: "application/json"}})
    .then(res => res.json())
    .then(joke => {
      setData(joke.value);
    });
  }
  return(
    <div>
      <label>
      Joke from API: {data}
      </label>
      <br></br>
      <button id="getJokeBtn" type="button" onClick={handleChange}>Get ChuckNorris</button>
    </div>
  );
}


export default App;
