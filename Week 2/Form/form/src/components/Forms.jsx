import axios from "axios";
import { useEffect, useState } from "react"

export const Forms = () =>{

    const [page, setPage] = useState(1);

    const [formData, setFormData] = useState({
        username: "",
        age: "",
        email: "",
    })

    const [data, setData] = useState([])

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
        }).then(()=>{
            getData();
        })
    }


    useEffect(()=>{
        getData();
    }, [page]);

    const getData = () =>{
        axios.get(`http://localhost:5000/users?_limit=3&_page=${page}`).then((res)=>{
            setData(res.data);
        })
    }

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
        <table>
            <thead>
                <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            </tr>
            </thead>
        {data.map(f => 
            <tbody>
                <tr>
                    <td>{f.username}</td>
                    <td>{f.age}</td>
                    <td>{f.email}</td>
                    </tr>
                    </tbody>)}
                    </table>

                    <button onClick={()=>{
                        setPage(page - 1);
                    }}>Prev</button>
                    <button onClick={()=>{
                        setPage(page + 1);
                    }}>Next</button>
        </div>     
    )
} 