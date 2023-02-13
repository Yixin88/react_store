import React, { useState } from 'react'
import { createContext } from 'react'

export const CartNum = createContext();



export default function NumInCart({children}) {
    const [ cart, setCart ] = useState(0);

    function addToCart() {
        setCart(cart + 1)
    }

    return (
        <CartNum.Provider value={{cart, addToCart}}>
            {children}
        </CartNum.Provider>
    )
}
