import "../src/index.css";

import img from "../src/masai_logo.png"

import React from "react";
import ReactDOM from "react-dom";

// const e = React.createElement(
//     "span",
//     {
//         className: "header-h1"
//     },
//     "Hello",
//     React.createElement('span', null, "Masai")
// );

ReactDOM.render(
   <div>
       <img src='masai_logo.png'></img>
       <h1 className="header-h1">First Header</h1>
       </div>,  //java script extended (jsx)
    document.getElementById('header')
)