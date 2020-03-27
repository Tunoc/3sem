import React from 'react';
import logo from './logo.svg';
import './App.css';
import { My_Table_Comp } from './NamesTable';
import { CarComp, CarCompFunc } from './CarComp';

function App() {
  return (
    <div className="App">
      <My_Comp></My_Comp>
      <My_Table_Comp name = "Flemming" age = "64"></My_Table_Comp>
      <My_Table_Comp name = "Holger" age = "32"></My_Table_Comp>
      <CarComp cars={[{name: "Toyota", price: "100"}, {name: "BMW", price: "500"}]}></CarComp>
      <CarCompFunc cars={[{name: "Toyota", price: "100"}, {name: "BMW", price: "500"}]}></CarCompFunc>
      
    </div>
  );
}



const My_Comp = () => {
  return(
    <div>
      Hello from my component
      <br></br>
    </div>
  );
}

export default App;
