import React, { useState } from 'react'
import { createContext } from 'react'

export const CartNum = createContext();



export default function NumInCart({children}) {
    const [ cart, setCart ] = useState(0);
    
    function addToCart() {
        setCart(prevCart => prevCart + 1)
        
    }
    
    function popUp() {
        const addedToCartNotification = document.querySelector(".addedToCart");

        addedToCartNotification.classList.add('active');
        setTimeout(() => {
            addedToCartNotification.classList.remove('active');
        }, 1000);
      }

    return (
        <CartNum.Provider value={{cart, addToCart, popUp}}>
            {children}
        </CartNum.Provider>
    )
}
