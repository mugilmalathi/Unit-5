import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState(18);
    const handleChange = (value)=>{
        setAuth(auth + value);
    }
    return (
        <AuthContext.Provider 
        value={{auth, handleChange}}>
            {children}
        </AuthContext.Provider>
    )
}