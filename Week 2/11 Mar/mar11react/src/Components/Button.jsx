// import './button.css'
import styled from "styled-components";

// export const Button = ({children, onClick})=>{

//     return(
//         <button className="myButton" onClick={onClick}>{children}</button>
//     )
//     }

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${({theme}) => theme === "light" ? "dodgerblue" : "indianred"};
    margin-top: 150px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
    color: white;
    border: 1px solid dodgerblue;
    transition: all 0.5s;
    cursor: pointer;
    border-radius: 10px;

    &:hover{    
        box-shadow: rgb(248, 11, 31) 0px 7px 29px 0px;
    }
`;
export {Button}