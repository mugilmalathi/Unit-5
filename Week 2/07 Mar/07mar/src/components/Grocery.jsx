import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList";

export const Grocery =() =>{
    const [items, setItems] =useState([]);

    const additem = (data) =>{
        setItems([...items, data]);
    };

    return(
        <div>
            <GroceryInput additem={additem}/>
            {items.map((e) =>(
                <GroceryList Grocery = {e} />
            ))}
        </div>
        
    )
}