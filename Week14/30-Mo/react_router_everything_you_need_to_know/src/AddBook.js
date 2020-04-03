import React, { useState } from "react";
export function AddBook({ bookFacade }) {
  const [book, setBook] = useState({ id: "", title: "", info: "" });
  const handleChange = event => {
    const inputFieldsID = event.target.id;
    const inputFieldsValue = event.target.value;
    setBook({ ...book, [inputFieldsID]: inputFieldsValue });
  };
  function handleSubmit(event) {
    event.preventDefault();
    bookFacade.addBook(book);
    setBook({ id: "", title: "", info: "" });
  }
  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <input
          id="title"
          value={book.title}
          placeholder="Add title"
          onChange={handleChange}
        />
        <br />
        <input
          id="info"
          value={book.info}
          placeholder="Add Info"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
