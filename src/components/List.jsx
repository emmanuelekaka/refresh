import React from 'react'

const List = ({People}) => {
  return (<div>
        {
            People.map((person) => (
             <h2 key={person.id} className="heading">Name: {person.name}</h2>
            ))
        }
        </div>
   )
}

export default List