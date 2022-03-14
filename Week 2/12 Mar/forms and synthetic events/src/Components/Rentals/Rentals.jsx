import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {

  const [data, setData] = useState([])


  useEffect(()=>{
    getData();
  }, [])

  const getData = ()=>{
    axios.get(`http://localhost:8008/forms`)
    .then((res)=>{
      setData(res.data);
    })
  }



  return (
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marriage Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.house} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="name">{house.name} </td>
                <td className="age">{house.age}</td>
                <td className="address">{house.address}</td>
                <td className="department">{house.department}</td>
                <td className="salary">{house.salary}</td>
                <td className="marital">
                  {house.marital}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
  );
};
