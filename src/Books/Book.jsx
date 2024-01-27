import React from 'react'

const handleClick = (name) =>{
  alert(name);
}

const Book = (Item) => {
  const {id,img, name, rating, removeItem} = Item;
  return (
    <div className='book'>
        <img src={img} alt={name} style={{width:'200px'}}/>
        <h2>{name}</h2>
        <p>Rating:<span className={rating}></span></p>
        <button onClick={()=>handleClick(name)}>Add to Cart</button>
        <button onClick={()=>removeItem(id)}>Remove</button>
    </div>
  )
}

export default Book