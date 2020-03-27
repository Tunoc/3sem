import React, { useState } from 'react';
export function FunctionalComponent() {
  const [value, setValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  function handleChange(event) {
    console.log("current input: " + value);
    setLastValue(value);
    setValue(event.target.value);
  }
  return (<div>
    <input type="text" value={value} onChange={handleChange} />
    <br></br>
    <label>
      Live type update : {value}
      <br></br>
          Last typed value : {lastValue}
    </label>
  </div>);
}


// const simpleFuncComponent = () => {
//   const [state, setState] = useState("This will change depending on input");

//   const handleChange = (event) => {
//     setState(event.target.value);
//   }

//   return(
//     <>
//       <div>{state}</div>
//       <input type="text" value={state} onChange={handleChange}></input>
//     </>
//   )
// }