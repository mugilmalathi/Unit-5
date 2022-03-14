import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {

  const [data, setData] = useState([])
  const [sort, setSort] = useState(0)

  useEffect(()=>{
    getData();
  }, [])

  const getData = ()=>{
    axios.get(`http://localhost:8080/houses`)
    .then((res)=>{
      setData(res.data);
    })
  }

  const handleSorting = ()=>{
    setSort(!sort);
  }


  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc" onClick={handleSorting}>
          {/* {
        data.sort((itema, itemb)=> (sort ? itema.rent - itemb.rent : true))
      } */}
          Rent Low to high</button>
        <button className="sortByRentDesc" onClick={handleSorting}>Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.house} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.bachelor}
                  {house.married}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
};
