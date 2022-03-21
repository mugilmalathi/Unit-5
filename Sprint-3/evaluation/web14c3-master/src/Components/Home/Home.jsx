import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios  from "axios";
// import styled from "styled-components";
import { useEffect, useState } from "react";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;
  const [book, setBook] = useState([]);

  useEffect(()=>{
      axios.get(" http://localhost:8080/books")
      .then(({data: value})=>{
        setBook([...value])
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
          {book.map((e)=>(
              <div style={{textAlign:"center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <h2 className="title">{e.title}</h2>
               <img style={{width:"200px", height:"200px", marginLeft:"20px"}} className="image" src={e.image} alt="#" />
               <div className="author">{e.author}</div>
               <div className="price">{e.price}</div>
              </div>
          ))}
      </div>
    </div>  
  )

  // return (
  //   <div className="homeContainer">
  //     <h2 style={{ textAlign: "center" }}>Home</h2>

  //     <div>

  //     </div>
      
  //     {/* <SortAndFilterButtons
  //       handleSort={
  //         "give handleSort function to this component, that sorts books"
  //       }
  //     />

  //     <Main className="mainContainer">
  //       {/* 
  //           Iterate over books that you get from network
  //           populate a <BookCard /> component
  //           pass down books id, imageUrl, title, price and anything else that you want to 
  //           show in books Card.
  //       */}
  //     {/* </Main>  */}
  //   </div>
  // );
};