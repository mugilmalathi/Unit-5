import { Link } from "react-router-dom";



export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{
          justifyContent:"center",
          width:"50%",
          margin:"auto"
      }}>
        <button style={{
            marginLeft:"250px",
            backgroundColor: "teal",
            marginBottom:"50px",
            border: "1px solid teal",
            cursor: "pointer"
        }} className="home">
          <Link style={{
              textDecoration: "none",
              color: "white"
          }} to="/">Home</Link>
        </button>
        <button style={{
            marginLeft:"50px",
            backgroundColor: "teal",
            marginBottom:"50px",
            border: "1px solid teal",
            cursor: "pointer"
        }} className="history">
          <Link style={{
              textDecoration: "none",
              color: "white"
          }} to="/todo">Todo</Link>
        </button>
        <button style={{
            marginLeft:"50px",
            backgroundColor: "teal",
            marginBottom:"50px",
            border: "1px solid teal",
            cursor: "pointer"
        }} className="mystery">
          <Link style={{
              textDecoration: "none",
              color: "white"
          }} to="/login">login</Link>
        </button>
      </div>
    </>
  );
};
