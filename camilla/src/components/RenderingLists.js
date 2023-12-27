import React from 'react';
import Book from './Book';

function RenderingLists() {
  const booklist = [
    'To kill a mockingbird',
    'The great gatsby',
    'The catcher',
  ];

  const books = [
    {
      title: 'To kill a mockingbird',
      author: 'Harper Lee',
      pages: '281',
    },
    {
      title: 'The great gatsby',
      author: 'F. Scott Fitzgerald',
      pages: '281',
    },
    {
      title: 'The catcher',
      author: 'Astrid Lindgren',
      pages: '121',
    },
  ];

  return (
    <div>
      {booklist.map(book => (
        <h2 key={book}>{book}</h2>
      ))}
      <hr />

      {books.map(book => (
        <div key={book.title}>
          <h5>Title: {book.title}</h5>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
        </div>
      ))}
      <hr />

      {books.map(book => (
        <Book key={book.title} book={book} />
      ))}
    </div>
  );
}

export default RenderingLists;