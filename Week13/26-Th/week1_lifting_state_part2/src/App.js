import React, {useState} from 'react';
import './App.css';
import { NewName } from './NewName';
import { NameList } from './NameList';

function App() {
  const initialValue = [
    {id: 1, name: "Peter"},
    {id: 2, name: "Ole"},
    {id: 3, name: "Jan"}
  ]
  const [names, setNames] = useState(initialValue);

  const addName = name =>{
    setNames([...names, {id: ++names.length, name}]);
  };

  return (
    <div className="App">
      <h2>
        Lifting state up 2
      </h2>
      <br></br>
      <p>Total names in list: {names.length}</p>
      <br></br>
      <div className="row">
        <div className="NameList">
          <NameList newNameList={names} />
        </div>
        <div className="NewName">
          <NewName addName={addName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
