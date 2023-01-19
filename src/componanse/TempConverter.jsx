// imrs
import React, { useState } from 'react';

const TempConverter = () => {
    const [Scale,setScale] = useState("true");
    const [temperatrue,setTemperatrue] = useState(0);
    
    const celsiusToFahrenheit = (c) => Math.round((c * 9) / 5 + 32);
    const fahrenheitToCelsius = (f) => Math.round(((f - 32) * 5) / 9);


    const ChangeScale = (val)=>{
        setScale(val)
    }
    const Changetmp = (val)=>{
        setTemperatrue(val)
    }

    return (
    <>
            <h1>temperatrue converter</h1>
            <fieldset>
                <legend>Personalia:</legend>
                <label>
                <input 
                type="radio" 
                name="cal" 
                value="calores" 
                checked={Scale === "calores"} 
                onChange={(e)=>ChangeScale(e.target.value)}/>
                calores
                </label>
                <label>
                <input 
                type="radio" 
                name="cal" 
                value="fuhrnhute" 
                checked={Scale === "fuhrnhute"} 
                onChange={(e)=>ChangeScale(e.target.value)}/>
                fuhrnhute
                </label>
            </fieldset>
            <label>
            <input 
            type="number" 
            min="-20" 
            max="60" 
            onChange={(e)=>Changetmp(e.target.value)} />
            temperatrue
            </label>
            <h1>output</h1>
            {Scale === "calores"? ` ${celsiusToFahrenheit(temperatrue)} F`:`${fahrenheitToCelsius(temperatrue)} C`}
            </>
            );
}
export default TempConverter;