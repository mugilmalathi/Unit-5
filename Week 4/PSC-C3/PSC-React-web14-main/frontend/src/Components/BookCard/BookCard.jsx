import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {

  const StyledLink = styled(Link)`
  text-align:center;
  padding:10px;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: teal 0px 5px 15px;
  width:300px;`

  return <StyledLink to={`/bookdetailspage/${id}`}>
    <div className="bookCard">
      <img src={imageUrl} style={{ 
        width: '250px', 
        borderRadius: '10px',
        height: '250px'
        }} alt="#" />
      <h2 className="title">{title}</h2>
      <h4 className="price">{price}</h4>
    </div>
  </StyledLink>

};
