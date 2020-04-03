import React, { useState } from "react";
export function FindBook({ bookFacade }) {
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState(null);
  const findBook = () => {
    const foundBook = bookFacade.findBook(bookId);
    setBook(foundBook);
  };
  const deleteBook = id => {
    bookFacade.deleteBook(id);
    setBook(null);
  };
  return (
    <div>
      <h2>Find Book</h2>
      <input
        id="book-id"
        placeholder="Enter book Id"
        onChange={e => {
          setBookId(e.target.value);
        }}
      />
      <button onClick={findBook}>Find book</button>
      {book ? (
        <div>
          <p>ID: {book.id}</p>
          <p>Title: {book.title}</p>
          <p>Info: {book.info}</p>
          <div>
            <button onClick={() => deleteBook(book.id)}>Delete Book</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Enter id for book to see</p>
        </div>
      )}
    </div>
  );
}
