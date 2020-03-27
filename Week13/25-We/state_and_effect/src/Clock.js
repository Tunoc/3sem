import React, { useState, useEffect } from 'react';
export function Clock() {
  const [curTime, setTime] = useState(new Date().toLocaleTimeString());
  // function handleChange(event) {
  //   setTime(new Date().toLocaleTimeString());
  // }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (<div>
    <label>
      Time is: {curTime}
    </label>
    <br></br>
    {/* <button id="getTimeBtn" type="button" onClick={handleChange}>Get current time button</button> */}
    {/* Don't need the button above anymore since we auto run the clock with useEffect */}
  </div>);
}
