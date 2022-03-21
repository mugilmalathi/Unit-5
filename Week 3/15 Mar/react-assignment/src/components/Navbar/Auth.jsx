import { useContext } from "react"
import {AuthContext} from "../../context/AuthContext"

export const Auth = () =>{

    const {auth} = useContext(AuthContext);
return(
    <nav>
        <h5>No.items in Cart: {auth}</h5>
    </nav>
)
}