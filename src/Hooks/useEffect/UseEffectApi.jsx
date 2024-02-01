import React, {useEffect, useState} from 'react'
import axios from 'axios';

const uri = 'https://api.github.com/users';

const UseEffectApi = () => {
    const [users, setPeople] = useState([]);

    const getUsers = async () =>{
        const response = await axios.get(uri);
        const users = await response.data;
        setPeople(users);

    }
    useEffect(()=>{
        getUsers();

    },[]);
  return (
    <div>
      <p>Git Hub Users</p>
      <div className='people'>
        {
            users.map((user)=>(<Person key={user.id} {...user}/>))
        }
        </div>
        
    </div>
  )
}


const Person = (Person) => {
    const {login, avatar_url} = Person;
  return (
    <div className="Person">
        <img src={avatar_url} alt="" />
        <p>{login}</p>
    </div>
  )
}


export default UseEffectApi