import { useContext } from "react"
import {AuthContext} from "../../context/AuthContext"


export const Button = () =>{
    const {handleChange} = useContext(AuthContext);
    return(
        <button onClick={()=>{
            handleChange(1)
        }}>
           Add to Cart
        </button>
    )
}