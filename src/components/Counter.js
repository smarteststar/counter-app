import './Counter.css'
import { useState } from 'react';

export default function Counter() {
    const [value,setValue]=useState(0);


    return (
        <div>

            <p> counter Game for learning React Use states</p>
            <button className="button-color" onClick={()=>incrementBy5Handler(5)}>5</button>

            <button className="button-color" onClick={()=>incrementBy5Handler(10)}>10</button>
            <br/>
            <button className="button-color" onClick={()=>incrementBy5Handler(15)}>15</button>
            <br/>
            <button className="button-color" onClick={()=>incrementBy5Handler(1)}>1</button>
            <br/>
            <button className="button-color" onClick={()=>incrementBy5Handler(2)}>2</button>
            <button className="button-color" onClick={()=>incrementBy5Handler(3)}>3</button>
            <br/>
            <span className="display-button-color"> {value}</span>

        </div>
    )

    function incrementBy5Handler(number) {
        setValue( prev=> prev+number)
        console.log({number} )

    }
}