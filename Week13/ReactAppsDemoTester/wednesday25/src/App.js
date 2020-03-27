import React, { useEffect, useState} from 'react';
import './App.css';
import { Clock } from './Clock';
import { FunctionalComponent } from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>Day 2</h1>
      <p>Class exercise 1</p>
      <Clock></Clock>
      <br></br>
      <br></br>
      <p>Class exercise 2</p>
      <FunctionalComponent></FunctionalComponent>
      <br></br>
      <br></br>
      <FetchFunction></FetchFunction>
    </div>
  );
}

function FetchFunction(){
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => (res.json()))
    .then(albums => {setData(albums)});
  }, []);
  console.log(data);
  // const tablerows = data.map(album => {
  //  return (
  //    <tr key={album.id}>
  //      <td>{album.id}</td>
  //      <td>{album.title}</td>
  //    </tr>
  //  );
  // });
  return(
    <div>
      <table>
        <thead><tr><th>Id</th><th>Title</th></tr></thead>
        {/* <tbody>{tablerows}</tbody> */}
      </table>
    </div>
  );
  
}



export default App;
