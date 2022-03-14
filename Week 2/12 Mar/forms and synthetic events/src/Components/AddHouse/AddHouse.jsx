import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {

    const [houseData, setHouseData] = useState({
        name: "",
        age: "",
        address:"",
        department:"",
        salary:"",
        marital:"",
    })

    const handleChange = (e) =>{
        const {className, value} = e.target;
        setHouseData({
            ...houseData,
            [className] : value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8008/forms`, houseData)
        .then(()=>{
            setHouseData({
              name: "",
              age: "",
              address:"",
              department:"",
              salary:"",
              marital:"",
            })
        })
    }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={houseData.name} required onChange={handleChange}/>
        <br />
        <label>age</label>
        <input value={houseData.age} type="text" className="age" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input value={houseData.address} type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>department</label>
        <input value={houseData.department} type="text" className="department" required onChange={handleChange}/>
        <br />
        <label>salary</label>
        <input value={houseData.salary} type="number" className="salary" required onChange={handleChange}/>
        <br />
        <label>marrital status</label>
        <input value={houseData.marital} type="text" className="marital" onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
