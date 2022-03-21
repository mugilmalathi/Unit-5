import { useContext } from "react"
import {CartContext} from "../../context/CartContext"


export const Button = () =>{
    const {handleChange} = useContext(CartContext);
    return(
        <button onClick={()=>{
            handleChange(1)
        }}>
           Add to Cart
        </button>
    )
}