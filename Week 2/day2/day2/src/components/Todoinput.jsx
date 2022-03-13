import {useState} from "react"
import axios from "axios";

export const TodoInput = ({addtodo}) =>{
    const [text, setText] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/users", text)
        .then(()=>{
            alert("success");
            setText({ 
                title: "",
            })
        })
    }

    const handleshow = (e) =>{

        var myInit = {
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        let req = new req('db.json', myInit);
        fetch(req)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data.users);
        })
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleSubmit}
            >
            </input>
            <button id="submit"
                onClick={()=>{
                    fetch('http://localhost:5000/todo' ,{
                    method: "POST",
                    body: JSON.stringify({title: text}),
                    headers:{
                        "Content-Type" : "application/json",
                    }
                })
                }}
                >
                Add

            </button>
            <div>{handleshow}</div>
        </div>
    )
}