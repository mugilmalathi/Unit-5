import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{
        textAlign: "center",
        paddingLeft:"30px",
        color: "teal",
        marginBottom:"60px"
      }}>
        <Link style={{
          textDecoration:"none",
          color:"teal",
          paddingLeft:"30px"
        }} to={"/"}>Home</Link>
        <Link style={{
          textDecoration:"none",
          color:"teal",
          paddingLeft:"30px"
        }} to={"/history"}>history</Link>
        <Link style={{
          textDecoration:"none",
          color:"teal",
          paddingLeft:"30px"
        }} to={"/mystery"}>Mystery</Link>
        <Link style={{
          textDecoration:"none",
          color:"teal",
          paddingLeft:"30px"
        }} to={"/technology"}>Technology</Link>
        <Link style={{
          textDecoration:"none",
          color:"teal",
          paddingLeft:"30px"
        }} to={"/mythology"}>Mythology</Link>
      </div>
    </>
  );
};
