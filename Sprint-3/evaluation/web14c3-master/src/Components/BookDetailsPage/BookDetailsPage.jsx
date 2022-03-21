import axios from "axios";
import { useEffect, useState } from "react";

export const BookDetailsPage = () => {

  const [book, setBook] = useState([]);

  useEffect(()=>{
      axios.get(" http://localhost:8080/books")
      .then(({data: value})=>{
        setBook([...value])
    });
}, []);
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
      <div className="bookContainer">
      <div style={{display:"grid", 
      gridTemplateColumns:"repeat(4, 1fr)",
      gap: "20px",
      width: "80%",
      margin: "auto"
      }}>
          {book.map((e)=>(
              <div style={{textAlign:"center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <h2 className="title">{e.title}</h2>
               <img style={{width:"100px", height:"100px", marginLeft:"20px"}} className="image" src={e.image} alt="#" />
               <div className="author">{e.author}</div>
               <div className="description">{e.description}</div>
               <div className="price">{e.price}</div>
              <div className="section">{e.section}</div>
              <div className="isbnNumber">{e.isbnNumber}</div>
              </div>
          ))}
      </div>
      </div>
    </>
  );
};
