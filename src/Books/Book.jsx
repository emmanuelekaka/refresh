import React from 'react'

const handleClick = (name) =>{
  alert(name)
}

const Book = (Items) => {
  const {img, name, rating} = Items;
  return (
    <div>
        <img src={img} alt={name} style={{width:'200px'}}/>
        <h2>{name}</h2>
        <p>Rating:<span className={rating}></span></p>
        <button onClick={()=>handleClick(name)}>Add to Cart</button>
    </div>
  )
}

export default Book