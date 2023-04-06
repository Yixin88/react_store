import React, { useContext } from 'react'
import { CartNum } from '../context/NumInCartContext'

export default function CheckoutPage() {
  const { cart, totalPrice } = useContext(CartNum);

  return (
    <main class="thankYouPopUp subpageMain" id="thankYouPopUp">
        <div>
            <img src={require("../assets/accept.png")} alt="tick icon" width="100px" />
        </div>
        <h3>Thank You!</h3>
        <p>Your order has been placed!</p>
        <p>🚚 Expected to be delivered within 3-5 business days 🚚</p>
        <p>Your order of {cart} {cart > 1 ? 'items' : 'item'} with a total of £{totalPrice} </p>
        <button class="keepBrowsingBtn">Continue Browsing</button>
    </main>
  )
}
