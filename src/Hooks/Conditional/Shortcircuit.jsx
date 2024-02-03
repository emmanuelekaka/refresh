import React, { useState } from 'react'

const Shortcircuit = () => {
    const [show, setShow] = useState(false)
    const hideItem = ()=>{
        setShow(!show)
    }
  return (
    <>
        {show && <h4>Show/Hide</h4>}
        <button type="button" onClick={hideItem}>Show/Hide</button>
        
    </>
  )
}

export default Shortcircuit