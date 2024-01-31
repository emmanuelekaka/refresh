import React, {useState} from 'react'

const UseStateNo = () => {

    const [number, setNumber] =  useState(0);
    const Multiply =()=>{
        setNumber(number*2);
    }
    const Sub =()=>{
        setNumber(number-1);
    }
    const Add =()=>{
        setNumber(number+1);
    }
    const Reset =()=>{
        setNumber(0);
    }
    const ComplexIncrease =()=>{
        setTimeout(()=>{
            setNumber((prevstate)=>{
                return prevstate+1;
            })
        },2000)
        setNumber(0);
    }
    return (
        <div>
            <p>{number}</p>
            <p>useStateNo</p>
            <div>
                <button onClick={Multiply}>Mul</button>
                <button onClick={Add}>Add</button>
                <button onClick={Sub}>Sub</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={ComplexIncrease}>Complex Increase</button>

            </div>
            
        </div>
  )
}

export default UseStateNo