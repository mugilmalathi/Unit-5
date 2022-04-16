export const SortAndFilterButtons = ({handleSort})=>{
    return (
        <div>
                <select style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "70px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }} name="" id=""
                onClick={() => handleSort("country", 1)}>
                    <option value="">Select</option>
                    <option value="india">India</option>
                    <option value="us">United States</option>
                    <option value="china">China</option>
                    <option value="japan">Japan</option>
                    <option value="malaysia">Malysia</option>
                </select>
                <button style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "150px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }} 
                onClick={() => handleSort("population", 1)}>Asc Population</button>
                <button style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    border: "1px solid indianred",
                    width: "150px",
                    height: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "indianred"
                }}
                onClick={() => handleSort("population", -1)}>Des Population</button>
            </div>
    )
}