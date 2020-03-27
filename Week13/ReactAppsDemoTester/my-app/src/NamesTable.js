import React from 'react';

export const My_Table_Comp = (props) => {
  const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }];
  return (<div>
    <table border='1'>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody>
        {names.map(person => <tr>
          <td> {person.fname} </td>
          <td> {person.lname} </td>
        </tr>)}
      </tbody>
    </table>
    {props.name} {props.age}
    <br></br>
  </div>
  );
};
