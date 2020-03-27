import React, {useState} from 'react';

export const NameForm = () => {
  const [name, setName] = useState("");
  function handleChange(event) { 
      setName(event.target.value);
  }
  function handleSubmit(event) {
      event.preventDefault();
      alert("This name was submitted: " + name);
   }
  return (<div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
          <input type="text" onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    {name}
    <br></br>
    <br></br>
  </div>);
};
export default function FormDemo() {
    return (<div style={{ marginTop: 25 }}>
      <NameForm />
    </div>);
  }