import React, { useState } from 'react';

const Counter = ()=>{
    const [counter, setCounter] = useState(0);

    const handleChangeIncreament = () =>{
        setCounter(counter + 1)
    }
    const handleChangedecreament = () =>{
        setCounter(counter - 1)
    }
    const handleChangeReset = () =>{
        setCounter(0)
    }

    return (
        <div className="counter">
            <button onClick={handleChangeIncreament}>+</button>
            <button onClick={handleChangeReset}>ٌreset</button>
            <button onClick={handleChangedecreament}>-</button>
            <h1>{counter}</h1>
        </div>
    );


}

export default Counter