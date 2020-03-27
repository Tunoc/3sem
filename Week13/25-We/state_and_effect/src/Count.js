import React, { useState } from 'react';
export function Count(props) {
  let useStateInitialValue = +props.propValue;
  const [value, setValue] = useState(useStateInitialValue);
  function handleChange(event) {
    switch (event.target.id) {
      case "add1":
        setValue(value + 1);
        break;
      case "remove1":
        setValue(value - 1);
        break;
      case "startCountInput":
        setValue(+event.target.value);
        break;
      default:
        break;
    }
  }
  return (<div>
    <label>
      Counter: {value}
    </label>
    <br></br>
    <button id="add1" type="button" onClick={handleChange}>Add {value} to counter</button>

    <button id="remove1" type="button" onClick={handleChange}>Remove {value} from counter</button>
    <br></br>
    <br></br>
    <input id="startCountInput" placeholder="Start count from?" type="number" onChange={handleChange} />


  </div>);
}
