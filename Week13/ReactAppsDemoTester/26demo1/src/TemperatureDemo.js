import React, { useState } from 'react';
export const TemperatureDemo = () => {
  const [farenheit, setFarenheit] = useState(32);
  const transferToChild2 = (event) => {
    setFarenheit(event.target.value);
  };
  return (<div>
    <h2>Temperature in Farenheit converts to Celcius</h2>
    <InputFarenheit transferToChild2={transferToChild2}></InputFarenheit>
    <UpdateCelcius getTheValue={farenheit}></UpdateCelcius>
  </div>);
};
const InputFarenheit = (props) => {
  return (<div>
    <label>Farenheit: </label>
    <input type="number" onChange={props.transferToChild2} placeholder="32"></input>
  </div>);
};
const UpdateCelcius = (props) => {
  return (<div>
    <label>Celcius: </label>
    {((props.getTheValue - 32) * 5) / 9}
  </div>);
};
