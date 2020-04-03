import React from "react";
export function Products({ bookFacade }) {
  const listItems = bookFacade.getBooks().map(book => {
    return <li key={book.id}>{book.title}</li>;
  });
  return (
    <div>
      <h2>Products</h2>
      <p>Size {bookFacade.getBooks().length}</p>
      <ul>{listItems}</ul>
    </div>
  );
}
