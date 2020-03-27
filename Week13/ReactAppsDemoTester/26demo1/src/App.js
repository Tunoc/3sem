import React, { useEffect, useState } from "react";
import './App.css';
import { TemperatureDemo } from './TemperatureDemo';
import { ApiFacade } from './ApiFacade';

function App() {
  return (
    <div className="App">
      <h1>
        Demo 1
      </h1>
      <TemperatureDemo></TemperatureDemo>
      <br></br>
      <br></br>
      <h1>
        Demo 2
      </h1>
      <TempTest></TempTest>
      <br></br>
      <br></br>
    </div>
  );
  }

const TempTest = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const {getData, postData} = ApiFacade();
  useEffect(() => {
      getData("http://localhost:4000/books")
      .then(data => {
        setData(data);
        console.log("DATA: ", data);
      })
      .catch(error => {
        console.log("ERROR:",error);
        //Is it a servererror (code 4xx or 5xx)
        if(error.fullError){
            error.fullError.then(e=>{if(e.msg){setError(error.status+':'+e.msg)}else{setError(error.status+': '+'Something bad happend')}})
        } else { // or is it a networerror (wrong host or sceme)
            setError("There was a network error")
        }
      });
  }, []);

  return (
    <div>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year Published</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map(book => {
            return(
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year_published}</td>
                <td>{book.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



export default App;
