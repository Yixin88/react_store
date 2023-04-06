import React, { useEffect, useRef, useState } from 'react'
import { createContext } from 'react'

export const CartNum = createContext();



export default function NumInCart({children}) {
    const [ itemsInCart, setItemsInCart ] = useState([]);
    const [ cart, setCart ] = useState(0);
    const [ totalPrice, setTotalPrice] = useState(0);
    const prevItemsInCart = useRef();

    useEffect(() => {
        setCart(itemsInCart.reduce((total, item) => {
            return total + item.quantity
        },0))

        setTotalPrice(itemsInCart.reduce((total, item) => {
            return total + item.price*item.quantity
        }, 0))

        
    }, [itemsInCart])

    useEffect(() => {
        prevItemsInCart.current = {cart, totalPrice}
    }, [totalPrice, cart]) 

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

    function minusFromCart(item) {
        setItemsInCart(prev => prev.map(cartItem => {
            if (cartItem.id === item.id) {
                if (cartItem.quantity > 1){
                    cartItem.quantity -= 1;
                }
            }
            return cartItem
        }))
    }

    function removeFromCart(item) {
        setItemsInCart(prev => prev.filter(cartItem => cartItem.id !== item.id))
    }
    
    function popUp() {
        const addedToCartNotification = document.querySelector(".addedToCart");

        addedToCartNotification.classList.add('active');
        setTimeout(() => {
            addedToCartNotification.classList.remove('active');
        }, 1000);
      }

    function clearCart() {
        setItemsInCart([]);
        setCart(0);
        setTotalPrice(0);
    }

    return (
        <CartNum.Provider value={{cart, popUp, itemsInCart, addItemToCart, minusFromCart, removeFromCart, totalPrice, clearCart, prevItemsInCart}}>
            {children}
        </CartNum.Provider>
    )
}
