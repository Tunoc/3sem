import React, { useState } from "react";

function NumberList({ numbers }) {
  const listItems = numbers.map(number => (
    <li key={numbers.indexOf(number)}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
