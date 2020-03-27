import React from 'react';
export const NameList = ({ newNameList }) => {
  return (<div>
    <table border='1' width='100%'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {newNameList.map(person => {
          return (<tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
          </tr>);
        })}
      </tbody>
    </table>
  </div>);
};
