import { Link } from "react-router-dom";

let styleTemp = {
  display: "flex",
  justifyContent: "space-around",
  padding: "15px",
  marginBottom: "15px",
};

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={styleTemp}>
        <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} className="home">
          <Link style={{
            textDecoration: 'none',
            color: 'white'
          }} to="/">Home</Link>
        </button>
        <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} className="history">
          <Link style={{
            textDecoration: 'none',
            color: 'white'
          }} to="/section/history">History</Link>
        </button>
        <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} className="mystery">
          <Link style={{
            textDecoration: 'none',
            color: 'white'
          }} to="/section/mystery">Mystery</Link>
        </button>
        <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} className="mythology">
          <Link style={{
            textDecoration: 'none',
            color: 'white'
          }} to="/section/mythology">Mythology</Link>
        </button>
        <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} className="technology">
          <Link style={{
            textDecoration: 'none',
            color: 'white'
          }} to="/section/technology">Technology</Link>
        </button>

      </div>
    </>
  );
};
