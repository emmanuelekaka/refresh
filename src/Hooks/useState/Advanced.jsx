import React, {useState} from 'react';


const Advanced = () => {
  let [name, setName] = useState('Random Title');
  const handleClick = ()=>{
    if (name ===  'Random Title'){
      setName('Way of the Universe');
    }else{
      setName('Random Title');
    }
    
  }

  // let title = "Random Title";
  // const changeTitle = ()=>{
  //    title = "Emma Test"
  //   return title;
  // }
  return (
    <div>
      <div>{name}</div>
      <button type="button" onClick={handleClick}>Change Title</button>
    </div>
  )
}

export default Advanced