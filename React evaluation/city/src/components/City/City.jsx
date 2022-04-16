import axios from "axios";
import { useEffect, useState } from "react"

 export const City = ()=>{

    const [formData, setFormData] = useState({
        id:"",
        country:"",
        city:"",
        population:""
    })

    const [data, setData] = useState({});

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]:value
        })
    }

    const handleSubmit = (e)=>{
        axios.post("http://localhost:8080/table", formData)
        .then(()=>{
            setFormData({
                id: "",
                country: "",
                city: "",
                population: ""
            })
        })
        .then(()=>{
            getData();
        })
    }

    useEffect(()=>{
        getData();
    }, []);

    const getData = ()=>{
        axios.get("http://localhost:8080/table")
        .then((res)=>{
            setData(res.data)
        })
    }

    return (
        <div style={{
            width: "20%",
            height: "450px",
            boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            borderRadius:"20px",
            margin: "auto"

        }}>
        <h1>Add City</h1>
        <label style={{fontWeight:"bold", color:"gray", paddingBottom:"10px"}}>Add ID</label>
        <br />
        <input style={{
            width:"200px",
            height: "25px",
            borderRadius:"5px",
            color: "indianred",
            textAlign:"center",
            marginBottom:"10px",
            border: "1px solid gray"
        }} 
        type="number"
        id="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="enter Id"
        />
        <br />
        <label style={{fontWeight:"bold", color:"gray", paddingBottom:"10px"}}>Add Country</label>
        <br />
        <input style={{
            width:"200px",
            height: "25px",
            borderRadius:"5px",
            color: "indianred",
            textAlign:"center",
            marginBottom:"10px",
            border: "1px solid gray"
        }} 
        type="text"
        id="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="enter Country"
        />
        <br />
        <label style={{fontWeight:"bold", color:"gray", paddingBottom:"10px"}}>Add City</label>
        <br />
        <input style={{
            width:"200px",
            height: "25px",
            borderRadius:"5px",
            color: "indianred",
            textAlign:"center",
            marginBottom:"10px",
            border: "1px solid gray"
        }} 
        type="text"
        id="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="enter City"
        />
        <br />
        <label style={{fontWeight:"bold", color:"gray", paddingBottom:"10px"}}>Add Population</label>
        <br />
        <input style={{
            width:"200px",
            height: "25px",
            borderRadius:"5px",
            color: "indianred",
            textAlign:"center",
            marginBottom:"10px",
            border: "1px solid gray"
        }} 
        type="number"
        id="population"
        value={formData.population}
        onChange={handleChange}
        placeholder="enter Population"
        />
        <br />
        <input style={{
                backgroundColor: "indianred",
                width: "70px",
                height: "25px",
                color: "white",
                borderRadius:"5px",
                marginTop:"30px",
                border: "1px solid indianred"
            }} 
            type="submit" 
            onClick={handleSubmit}
            />
        </div>
    )
 }