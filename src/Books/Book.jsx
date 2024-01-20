import React from 'react'

const Book = (Items) => {
  const {img, name, rating} = Items.book;
  return (
    <div>
        <img src={img} alt={name} style={{width:'200px'}}/>
        <h2>{name}</h2>
        <p>Rating:<span className={rating}></span></p>
    </div>
  )
}

export default Book