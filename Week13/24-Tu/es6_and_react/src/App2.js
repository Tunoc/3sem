import React from 'react';
import './App.css';
import importedPerson, {males, females} from "./file2";

function App() {
  let person = importedPerson;
  let { firstName, email } = person;
  let spread = [...males, "Kurt", "Helle", ...females, "Tina"];
  let [peter, jan,,, jane, sarah,] = spread;
  let destructuredArray = [peter, jan, jane, sarah];
    return (
    <div className="App">
      <h1>2 Object and Array Destructuring</h1>
      <p>{firstName}, {email}</p>
      {console.log(destructuredArray)}
      {console.log(spread)}
    </div>
  );
}

export default App;
