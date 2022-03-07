import { useState } from "react";

export function Notebooks(){
     const [count, setCount] = useState(0);

     const notebookCount = (val)=>{
         setCount(count+val);
     }

     return (
        <div className="items">
        <span className="notebookcount">Notebooks:<h4>{count}</h4></span>
        <br></br>
        <button className="addNotebook" onClick={()=>{
            
            notebookCount(1);
        }}>ADD NOTE
        </button>
        <button className="remNotebook" onClick={()=>{
            if(count >= 1){
                notebookCount(-1);
            }
        }}>REMOVE NOTE
        </button>
        <br></br>
        <span className="totalNotebooks">Total Notebooks:{count}</span>
    </div>
     )
}