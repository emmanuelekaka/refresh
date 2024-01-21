import React from 'react'
import Book from './Book'



const BookList = ({Items}) => {
  return (
    <div className="BookList">
      {
      Items.map((book) => (
        <Book key = {book.id} {...book}/>
      ))}
        
    </div>
  )
}

export default BookList