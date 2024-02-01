import React from 'react'
import Book from './Book'



const BookList = ({Items, removeItem}) => {
  
  return (
    <div className="BookList">
      {
      Items.map((book) => (
        <Book key = {book.id} {...book} removeItem={removeItem}/>
      ))}
        
    </div>
  )
}

export default BookList