export const Login = ()=>{

    return(
        <div style={{
            border: "1px solid gray",
            width: "15%",
            margin: "auto",
            justifyContent: "center"
        }}>
            <h1 style={{
                textAlign: "center"
            }}>Login</h1>
            <input style={{
                marginLeft: "30px"
            }} type="text" placeholder="enter username" name="" id="" />
            <br />
            <input style={{
                marginLeft: "30px"
            }} type="password" placeholder="enter password" name="" id="" />
            <br />
            <input type="submit" style={{
                marginLeft: "80px",
                backgroundColor: "teal",
                marginBottom: "50px",
                border: "1px solid teal",
                cursor: "pointer"
            }} />
        </div>
    )
}
