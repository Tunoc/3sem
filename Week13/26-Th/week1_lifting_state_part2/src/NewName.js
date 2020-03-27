import React, { useState } from 'react';
export const NewName = ({ addName }) => {
  const [name, setName] = useState("");
  const saveName = (evt) => {
    evt.preventDefault();
    addName(name);
    setName("");
  };
  return (<form>
    <input type='text' placeholder='Type name here' value={name} onChange={e => setName(e.target.value)} />
    <input type='submit' value='Submit' onClick={saveName} />
  </form>);
};
