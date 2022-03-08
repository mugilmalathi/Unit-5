import {useState} from "react"

export const GroceryInput = ({additem, deleteItem}) =>{
    const [text, setText] = useState("");
    const [items, setItems] =useState([]);


    const deleteitem = (e, i)=>{
        setItems(items.splice(i));
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) =>{
                    setText(e.target.value);
                }}
            >
            </input>
            <button
                onClick={()=>{
                    additem(text)
                }}
            >
                Add

            </button>

            <button
                onClick={()=>{
                    deleteitem()
                }}
            >
                Delete

            </button>
        </div>
    )
}