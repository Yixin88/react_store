import React, { useState } from 'react'
import { createContext } from 'react'

export const CartNum = createContext();



export default function NumInCart({children}) {
    const [ cart, setCart ] = useState(0);
    const [ itemsInCart, setItemsInCart ] = useState([]);
    
    function addToCart() {
        setCart(prevCart => prevCart + 1)
        
    }

    function addItemToCart(item) {
        if (itemsInCart.some(element => item.id === element.id)) {
            setItemsInCart(prev => prev.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.quantity += 1;
                }
                return cartItem;
            }))
        } else {
            item.quantity = 1
            setItemsInCart(prev => [...prev, item])
        } 
        
    }
    
    function popUp() {
        const addedToCartNotification = document.querySelector(".addedToCart");

        addedToCartNotification.classList.add('active');
        setTimeout(() => {
            addedToCartNotification.classList.remove('active');
        }, 1000);
      }

    return (
        <CartNum.Provider value={{cart, addToCart, popUp, itemsInCart, addItemToCart}}>
            {children}
        </CartNum.Provider>
    )
}
