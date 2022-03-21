import { useNavigate } from "react-router-dom"

export const Login = ()=>{

    const navigate = useNavigate();
    return (
<div>
   <input type="text"  placeholder="enter username"/>
   <input type="text" placeholder="enter password" /> 
   <button onClick={()=>{
    navigate("/")
    }}
      >
    Login
    
    </button>
    
</div>
    )
}