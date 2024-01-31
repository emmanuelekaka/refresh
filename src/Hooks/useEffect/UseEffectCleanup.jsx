import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
    const getInnerwidth = ()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', getInnerwidth)
        return ()=>{
            console.log('Event Listener Removed');
            window.removeEventListener('resize', getInnerwidth)}
        
    }   )
    return (
        <div>
            <p>{size} PX</p>
            <h2>Window Resize</h2>
        </div>
    )
}

export default UseEffectCleanup