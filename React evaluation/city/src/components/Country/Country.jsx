export const Country = ()=>{

    return (
        <div style={{
            width: "20%",
            height: "300px",
            boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            borderRadius:"20px",
            margin: "auto"

        }}>
        
        <h1>Add Country</h1>
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
        }} type="number" />
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
        }} type="text" />
        <br />
            <input style={{
                backgroundColor: "indianred",
                width: "70px",
                height: "25px",
                color: "white",
                borderRadius:"5px",
                marginTop:"30px",
                border: "1px solid indianred"
            }} type="submit" />

        </div>
    )
 }