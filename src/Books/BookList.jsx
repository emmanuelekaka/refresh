import React from 'react'
import Book from './Book'

// const Items =[
//   {
//     img:'./Images/future.jpg',
//     name:'Ways of the future',
//     rating:'fa fa-star checked'

//   }
// ]



const BookList = ({Items}) => {
  return (
    <div className="BookList">
      {
      Items.map((book) => (
        <Book key = {book.id} book={book}/>
      ))}
        
    </div>
  )
}

export default BookList