import React, {useState} from 'react'
import Data from '../../Books/Data';
import BookList from '../../Books/BookList';

const UseStateArray = () => {
  const [people, setPeople] = useState([]);
  const GetPeople = ()=>{
      setPeople(Data)
  }
  const removeItem = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <div>
        {
            people.length ? <BookList Items = {people} removeItem={removeItem}/>:<h2>Loading ...</h2>
        }
        <button type="button" onClick={GetPeople}>Refresh</button>
        
    </div>
  )
}

export default UseStateArray