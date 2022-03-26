import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/action";

export const Todo = ()=>{
    const [text, setText] = useState("");
    const todo = useSelector((store) => store.todo) 
    const dispatch = useDispatch();
    return (
        <div style={{
            border: "1px solid gray",
            width: "30%",
            margin: "auto"
        }}>
            <label style={{textAlign:"center"}}>Add Todo</label>
            <hr />
            <input id="scrum" placeholder="scrum" type="text" onChange={(e)=> setText(e.target.value)} />
            <br />
            <input id="dsa" placeholder="dsa" type="text" onChange={(e)=> setText(e.target.value)} />
            <br />
            <input id="skill" placeholder="skillathon" type="text" onChange={(e)=> setText(e.target.value)} />
            <br />
            <input id="code" placeholder="coding" type="text" onChange={(e)=> setText(e.target.value)} />
            <br />
            <input id="IA" placeholder="IA Standup" type="text" onChange={(e)=> setText(e.target.value)} />
            <br />
            <button onClick={()=>{
                dispatch(addTodo(text))
            }}
            >
                Submit    
            </button>
            <div>
                  <table style={{
                      border: "1px solid teal",
                      margin: "auto",
                      marginTop:"50px"
                  }}>
                      <thead>
                          <tr style={{
                              border: "1px solid teal"
                          }}>
                              <td style={{
                              border: "1px solid teal"
                          }}>Scrum</td>
                              <td style={{
                              border: "1px solid teal"
                          }}>Dsa</td>
                              <td style={{
                              border: "1px solid teal"
                          }}>Skillathon</td>
                              <td style={{
                              border: "1px solid teal"
                          }}>Coding</td>
                              <td style={{
                              border: "1px solid teal"
                          }}>IA</td>
                          <td style={{
                              border: "1px solid teal"
                          }}>Status</td>
                          <td style={{
                              border: "1px solid teal"
                          }}>Delete</td>
                          </tr>
                      </thead>
                      <tbody id="pass">
            {todo.map((e)=>(
                          <tr>
                              <td>{e}</td>
                              <td>{e}</td>
                              <td>{e}</td>
                              <td>{e}</td>
                              <td>{e}</td>
                              <td><button onClick={()=>{
                                  if(true){
                                    e.pass.style.color = "green";
                                  }
                              }}>Status</button></td>
                              <td><button onClick={()=>{

                              }}>Delete</button></td>
                          </tr>
                      
                      ))}
                      </tbody>
                  </table>
              </div>  
            
        </div>
    )
}