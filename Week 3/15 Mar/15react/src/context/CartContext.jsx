import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState(18);
    const handleChange = (value)=>{
        setCart(cart + value);
    }
    return (
        <CartContext.Provider 
        value={{cart, handleChange}}>
            {children}
        </CartContext.Provider>
    )
}