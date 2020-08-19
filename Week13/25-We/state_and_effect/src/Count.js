import React, { useState, useEffect } from "react";
export function Count(props) {
  let useStateInitialValue = +props.propValue;
  const [value, setValue] = useState(useStateInitialValue);
  useEffect(() => {
    if (
      localStorage.getItem("count") !== undefined &&
      localStorage.getItem("count") !== null
    ) {
      setValue(+localStorage.getItem("count"));
      localStorage.setItem("count", value); //When we unmount we set the last number
      //This avoids giving us off by one.
    }
  }, []);
  function handleChange(event) {
    switch (event.target.id) {
      case "add1":
        setValue(value + useStateInitialValue);
        localStorage.setItem("count", value);
        break;
      case "remove1":
        setValue(value - useStateInitialValue);
        localStorage.setItem("count", value);
        break;
      default:
        break;
    }
  }
  function startCountHere(event) {
    setValue(+event.target.value);
  }
  return (
    <div>
      <label>Counter: {value}</label>
      <br></br>
      <button id="add1" type="button" onClick={handleChange}>
        Add {value} to counter
      </button>

      <button id="remove1" type="button" onClick={handleChange}>
        Remove {value} from counter
      </button>
      <br></br>
      <br></br>
      <input
        id="startCountInput"
        placeholder="Start count from?"
        type="number"
        onChange={startCountHere}
      />
    </div>
  );
}
