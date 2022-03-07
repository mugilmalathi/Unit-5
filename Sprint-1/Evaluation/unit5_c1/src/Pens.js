import { useState } from "react";

export function Pens(){
     const [count, setCount] = useState(0);

     const penCount = (val)=>{
         setCount(count+val);
     }

     return (
        <div className="items">
        <span className="pencount">Pens:<h4>{count}</h4></span>
        <br></br>
        <button className="addPen" onClick={()=>{
            
            penCount(1);
        }}>ADD PEN
        </button>
        <button className="remPen" onClick={()=>{
            if(count >= 1){
                penCount(-1);
            }
        }}>REMOVE PEN
        </button>
        <br></br>
        <span className="totalPens">Total Pens:{count}</span>
    </div>
     )
}