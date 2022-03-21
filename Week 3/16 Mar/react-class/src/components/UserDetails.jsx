import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom"

export const UserDetails = ()=>{

    const {id} = useParams();
    const [user, setUser] = useState();


    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
    }, [])
 

    
    // if(true){
    //     return <Navigate to={"/login"}/>
    // }
    
    return(
        <div>User of Id: {id}</div>
    )
}