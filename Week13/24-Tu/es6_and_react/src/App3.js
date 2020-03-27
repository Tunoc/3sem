import React from 'react';
import './App.css';
import {names} from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props){
console.log(props);
return <h1>Hello, {props.person.firstName}, {props.person.lastName}, {props.person.email}</h1>
}
  
function App() {
  return (
    <div className="App">
      <h1>3 Composing Components</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      {names.map((p)=><WelcomePerson person={p}/>)}
      {/* <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} /> */}
    </div>
  );
}

export default App;
