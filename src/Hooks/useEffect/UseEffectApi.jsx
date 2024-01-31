import React, {useEffect, useState} from 'react'

const uri = 'https://api.github.com/users';

const UseEffectApi = () => {
    const [users, setPeople] = useState([]);

    const getUsers = async () =>{
        const response = await fetch(uri);
        const users = await response.json();
        setPeople(users)
        // return users;
        // console.log(users);
    }

    useEffect(()=>{
        getUsers();

    });
  return (
    <div>
      <p>Git Hub Users</p>
        {
            users.map((user)=>{
                <Person key={user.id} Person = {user}/>
            })
            
        }
        
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