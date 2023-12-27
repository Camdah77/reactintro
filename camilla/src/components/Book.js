import React from 'react';


function Book(props) {
  const book= props.book
    return (
      
      <div>
          <h5>Titel:{book.title}</h5>
          <p>Author:{book.author}</p>
          <p>Page:{book.pages}</p>
</div>
)
    }

export default Book