import React, {useState} from 'react'

const UseStateObject = () => {

    const [person, setPerson] = useState({name:"John Doe",age:0, address:'kla'})
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')

    let updateName = ()=>{
      setPerson({...person, name:"Emma Emma"});
    }
    let updateAge = ()=>{
      setPerson({...person, age:34});
    }
    let updateAddress = ()=>{
      setPerson({...person, address:'NY'});
    }
  return (
    <>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.address}</p>
        <button onClick={updateName}>Update Name</button>
        <button onClick={updateAge}>Update Age</button>
        <button onClick={updateAddress  }>Update Address</button>
    </>
  )
}

export default UseStateObject