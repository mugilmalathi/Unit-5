import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {

    const [houseData, setHouseData] = useState({
        name: "",
        ownerName: "",
        address:"",
        areaCode:"",
        rent:"",
        bachelor:"",
        married:"",
        image:"",
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
        axios.post(`http://localhost:8080/houses`, houseData)
        .then(()=>{
            setHouseData({
                name: "",
                ownerName: "",
                address:"",
                areaCode:"",
                rent:"",
                bachelor:"",
                married:"",
                image:"",
            })
        })
    }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={houseData.name} required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input value={houseData.ownerName} type="text" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input value={houseData.address} type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input value={houseData.areaCode} type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input value={houseData.rent} type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input value={houseData.bachelor} type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input value={houseData.married} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={houseData.image} type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
