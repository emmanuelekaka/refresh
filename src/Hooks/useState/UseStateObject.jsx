import React, {useState} from 'react'

const UseStateObject = () => {

    const [person, setPerson] = useState({name:"John Doe",age:0, address:'kla'})
    let updateName = ()=>{
        setPerson({...person, name:"Emma Emma"});
    }

  return (
    <>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.address}</p>
        <button onClick={updateName}>Update</button>
    </>
  )
}

export default UseStateObject