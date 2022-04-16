import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return (
        <div style={{
            width:" 40%",
            margin: "auto",
            height: "30px",
            marginBottom:"60px",
            marginTop:"30px"
        }}>
            <button style={{
                marginLeft: "20px",
                backgroundColor: "indianred",
                border: "1px solid indianred",
                width: "70px",
                height: "25px",
                borderRadius:"5px",
                cursor: "pointer"
            }}><Link style={{ textDecoration: "none", color: "white" }} to="/" >Home</Link>
            </button>

            <button style={{
                marginLeft: "20px",
                backgroundColor: "indianred",
                border: "1px solid indianred",
                width: "70px",
                height: "25px",
                borderRadius:"5px",
                cursor: "pointer"
            }}><Link style={{ textDecoration: "none", color: "white" }} to="/city" >Add City</Link>
            </button>

            <button style={{
                marginLeft: "20px",
                backgroundColor: "indianred",
                border: "1px solid indianred",
                width: "120px",
                height: "25px",
                borderRadius:"5px",
                cursor: "pointer"
            }}><Link style={{ textDecoration: "none", color: "white" }} to="/country" >Add Country</Link>
            </button>

        </div>
    )
}