import { useEffect, useState } from "react"

export const Todos = () =>{

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // const [data, setData] = useState([])
console.log('Before effect') //1

    useEffect(()=>{
        alert('Hello..!')
    }, [])

    useEffect(()=>{
        console.log('Inside effect 2') //4
     },[count1])

console.log('After effect') //2

    return (
        <div>
            Count{[count, "<>", count1]}
            <button onClick={()=>{
                setCount(count+1);
            }}>FIRST</button>

            <button onClick={()=>{
                setCount1(count1+1);
            }}>SECOND</button>
        </div>
    )
}