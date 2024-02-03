import React, { useState } from 'react'

const Form = () => {
    const [fullname, setName] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState([]);
    const [people, setPeople] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (fullname && age && description){
            // setName(fullname);
            // setAge(age);
            // setDescription(description);
            // let currentTime = new Date();
            const person = {id: new Date().getTime().toString(), fullname, age, description};
            // const NewList = [...people, person];
            setPeople((people) =>{return [...people, person]});
            console.log(person);
            console.log(people);
        }
         
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
        <div>
            <label htmlFor="fullname">Name</label>
            <input 
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e)=>setName(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input 
                type="number"
                name="age"
                id="age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="id">Description</label>
            <input 
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />
        </div>
        <button>submit</button>
    </form>
    </>
  )
}

export default Form