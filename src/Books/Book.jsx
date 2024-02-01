import React from 'react'

const Book = (Item, removeItem) => {
  const {id,img, name, rating} = Item;
  return (
    <div className='book'>
        <img src={img} alt={name} style={{width:'200px'}}/>
        <h2>{name}</h2>
        <p>Rating:<span className={rating}></span></p>
        <button onClick={()=>removeItem(id)}>Remove</button>
    </div>
  )
}

export default Book