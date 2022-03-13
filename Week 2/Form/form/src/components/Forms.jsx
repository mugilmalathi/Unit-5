import axios from "axios";
import { useState } from "react"

export const Forms = () =>{


    const [formData, setFormData] = useState({
        username: "",
        age: "",
        email: "",
    })

    const handleChange = (e) =>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
                [id]: value,
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/users", formData)
        .then(()=>{
            alert("success");
            setFormData({ 
                username: "",
                age: "",
                email: "",
            })
        })
    }

        const handleShow = ((e)=>{
            axios
            .get("http://localhost:5000/users")
            .then(res=>{
                setFormData(res.data)
            })
        }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <input 
            id="username" 
            value={formData.username}
            type="text" 
            onChange={handleChange} 
            placeholder="enter username"/>

            <input 
            id="age" 
            value={formData.age}
            type="number" 
            onChange={handleChange} 
            placeholder="enter age"/>

           <input 
            id="email" 
            value={formData.email}
            type="text" 
            onChange={handleChange} 
            placeholder="enter email"/>

            <input 
            type="submit" 
            value="Submit" />

        </form>
        <div>{handleShow}</div>
        </div>     
    )
} 