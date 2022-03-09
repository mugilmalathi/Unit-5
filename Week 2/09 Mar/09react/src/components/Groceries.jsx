import { useEffect, useState } from "react"
import axios from "axios";

export const Groceries = () => {
    const [text, setText] = useState("")
    const [groceries, setGroceries] = useState([])
    useEffect(()=>{
        axios
        .get("http://localhost:3000/groceries")
        .then(res=>{
            setGroceries(res.data);
        })
    }, [])
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{
                fetch('http://localhost:3000/groceries' ,{
                method: "POST",
                body: JSON.stringify({title: text, purchased: false}),
                headers:{
                    "Content-Type" : "application/json",
                }
            })
            }}>Save Groceries</button>
        </div>
    )
}