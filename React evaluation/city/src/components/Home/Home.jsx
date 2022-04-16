import axios from "axios"
import { useEffect, useState } from "react"
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons"

export const Home = ()=>{

    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/table")
        .then((res)=>{
            setList(res.data)
        })
    }, [])

    function handleSort(nameBy, order) {
        if (nameBy === 'country' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? 1 : -1)])
        else if (nameBy === 'country' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? -1 : 1)])
        else if (nameBy === 'population' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.population > b.population ? 1 : -1)])
        else if (nameBy === 'population' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.population > b.population ? -1 : 1)])
    }
    

    return (
        <div className="homepage">

            <SortAndFilterButtons
                handleSort={handleSort}
            />
            
            <h1 style={{textAlign:"center"}}>Table of City and Country</h1>
           <table style={{
               boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
               margin: "auto"
           }}>
               <thead>
                   <tr>
                       <td style={{border:"1px solid black"}}>Id</td>
                       <td style={{border:"1px solid black"}}>Country</td>
                       <td style={{border:"1px solid black"}}>City</td>
                       <td style={{border:"1px solid black"}}>Population</td>
                       <td style={{border:"1px solid black"}}>Edit</td>
                       <td style={{border:"1px solid black"}}>Delete</td>
                   </tr>
               </thead>
               {
                   list.map(e=>
                       <tbody>
                           <tr>
                               <td style={{ border: "1px solid black" }}>{e.id}</td>
                               <td style={{ border: "1px solid black" }}>{e.country}</td>
                               <td style={{ border: "1px solid black" }}>{e.city}</td>
                               <td style={{ border: "1px solid black" }}>{e.population}</td>

                               <td style={{ border: "1px solid black" }}>
                                   <button style={{
                                       marginLeft: "20px",
                                       backgroundColor: "indianred",
                                       border: "1px solid indianred",
                                       width: "70px",
                                       height: "25px",
                                       borderRadius: "5px",
                                       cursor: "pointer",
                                       color: "white"
                                   }}>Edit</button></td>

                               <td style={{ border: "1px solid black" }}>
                                   <button style={{
                                       marginLeft: "20px",
                                       backgroundColor: "indianred",
                                       border: "1px solid indianred",
                                       width: "70px",
                                       height: "25px",
                                       borderRadius: "5px",
                                       cursor: "pointer",
                                       color: "white"
                                   }}>Delete</button></td>
                           </tr>
                       </tbody>
                    )
               }
           </table>
        </div>
    )
}