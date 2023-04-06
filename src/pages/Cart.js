import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import CartProducts from '../components/CartProducts';
import { CartNum } from '../context/NumInCartContext'
import ScrollToTop from '../util/ScrollToTop';

export default function Cart() {
  const {totalPrice, itemsInCart } = useContext(CartNum);
  return (
    <main className='subpageMain cartPage'>
      <ScrollToTop />
      {itemsInCart.length === 0 ? 
      <div className='emptyCartMsg'>
        <h1>Your Cart Is Empty</h1>
        <NavLink to='/'>Start Browsing</NavLink>
      </div>
      :
      <>
        <h1 className='cartTitle'>Your Cart</h1>
  
        <div className='cartSection'>
          {itemsInCart.map(item => <CartProducts key={item.id} item={item} />)}
        </div>
  
        <h3 className='priceTotal'>Total: £{totalPrice}</h3>
        <NavLink to='success' className='checkoutBtn active'>Buy Now</NavLink>
      </>}
    </main>
  )
}
