import { useState } from "react";

export function Inkpens(){
     const [count, setCount] = useState(0);

     const inkpenCount = (val)=>{
         setCount(count+val);
     }

     return (
        <div className="items">
        <span className="inkpencount">Ink Pens:<h4>{count}</h4></span>
        <br></br>
        <button className="addInkpen" onClick={()=>{
            
            inkpenCount(1);
        }}>ADD PEN
        </button>
        <button className="remInkpen" onClick={()=>{
            if(count >= 1){
                inkpenCount(-1);
            }
        }}>REMOVE PEN
        </button>
        <br></br>
        <span className="totalInkpens">Total Inkpens:{count}</span>
    </div>
     )
}