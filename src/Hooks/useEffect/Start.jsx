import React, {useEffect, useState} from 'react'

const Start = () => {
    const [number, setNumber]  = useState(0);
    const updateNumber = ()=>{
         setNumber(number+1);
    }
    useEffect(()=>{
        console.log('Call useEffect')
        document.title = `Message ${number}`;
    },[])
    console.log('Render component');
  return (
    <div>
        <p>{number}</p>
        <h2>UseEffect Intro</h2>
        <button type="button" onClick={updateNumber}>Rerender</button>
    </div>
  )
}

export default Start