import { useState } from "react";

export function Books(){
     const [count, setCount] = useState(0);

     const bookCount = (val)=>{
         setCount(count+val);
     }

     const sum = 0;
     const totalBooks = ()=>{
         setCount(sum+count);
     }

     return (
        <div className="items">
        <span className="bookcount">Books:<p>{count}</p></span>
        <br></br>
        <button className="addBook" onClick={()=>{

            bookCount(1);
        }}>ADD BOOK
        </button>
        <button className="remBook" onClick={()=>{
            if(count >= 1){
              bookCount(-1);
            }
        }}>REMOVE BOOK
        </button>
        <br></br>
        <span className="totalBooks">Total Books: {count}</span>
    </div>
     )
}