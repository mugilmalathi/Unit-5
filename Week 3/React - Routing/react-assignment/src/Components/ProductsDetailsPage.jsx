import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsDetailsPage = () => {
  const [pro, setPro] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:8008/products")
      .then(({data: value})=>{
        setPro([...value])
    });
}, []);
  
  return(
    <div className="homeContainer">
      <div style={{display:"grid", 
      gridTemplateColumns:"repeat(4, 1fr)",
      gap: "20px",
      width: "80%",
      margin: "auto"
      }}>
          {pro.map((e)=>(
              <div style={{textAlign:"center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
               <img style={{width:"200px", height:"200px", marginLeft:"20px"}} className="image" src={e.image} alt="#" />
               <h2 className="productName">{e.name}</h2>
            <h5 className="productPrice">Price : {e.price}</h5>
              </div>
          ))}
      </div>
    </div>  
  )
};
