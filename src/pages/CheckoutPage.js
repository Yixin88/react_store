import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartNum } from '../context/NumInCartContext'

export default function CheckoutPage() {
  const { cart, totalPrice, prevItemsInCart } = useContext(CartNum);

  return (
    <main className="thankYouPopUp subpageMain">
        <div>
            <img src={require("../assets/accept.png")} alt="tick icon" width="100px" />
        </div>
        <h3>Thank You!</h3>
        <p>Your order has been placed!</p>
        <p>🚚 Expected to be delivered within 3-5 business days 🚚</p>
        <p>Your order of {prevItemsInCart.current.cart} {prevItemsInCart.current.cart > 1 ? 'items' : 'item'} with a total of £{prevItemsInCart.current.totalPrice} </p>
        <NavLink to='/' className="keepBrowsingBtn">Continue Browsing</NavLink>
    </main>
  )
}
