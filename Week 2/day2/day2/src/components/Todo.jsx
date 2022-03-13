import { useState } from "react"
import { TodoInput } from "./Todoinput"
import { TodoItem } from "./Todoitem";

export const Todo =() =>{
    const [todos, setTodos] =useState([]);

    const addtodo = (data) =>{
        setTodos([...todos, data]);
    };
    return(
        <div>
            <TodoInput addtodo={addtodo}/>
            {todos.map((e) =>(
                <TodoItem todo = {e} />
            ))}
        </div>
        
    )
}