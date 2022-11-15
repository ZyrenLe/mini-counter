import { useState } from "react";



export default function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <>
            <button className="decrease" onClick={ ()=> setCount(count -1) }>
                 - 
            </button>
            <div className="product counter">{count}</div> 
            <button className="increase"onClick={ ()=> setCount(count +1) }>
                 + 
            </button>
        </>
    )
}