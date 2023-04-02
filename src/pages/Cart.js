import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartNum } from '../context/NumInCartContext'
import ScrollToTop from '../util/ScrollToTop';

export default function Cart() {
  const { cart, itemsInCart } = useContext(CartNum);
  return (
    <main className='subpageMain'>
      <ScrollToTop />
      {itemsInCart.length === 0 ? 
      <div className='emptyCartMsg'>
        <h1>Your Cart Is Empty</h1>
        <NavLink to='/'>Start Browsing</NavLink>
      </div>
      :
      <h1 className='cartTitle'>Your Cart</h1>}

      <div className='cartSection'>
        {itemsInCart.map(item => {
          return (
            <div key={item.id} className='cartCard'>
              <div className="cartCardImg">
                <img src={item.images[0]} alt="product" />
              </div>
              <div className='cartCartDetail'>
                <h3 className='cartCartProduct'>{item.title}</h3>
                <span className='cartPrice'>£{item.price}/Unit</span>
              </div>
              <div className="quantityContainer">
                  <button className="quantityBtn quantityMinus">-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantityBtn quantityPlus">+</button>
                  <button className="deleteBtn"><img src={require("../assets/trash-bin.png")} alt="delete icon" width="40px" /></button>
              </div>
            </div>)
        })}
      </div>
    </main>
  )
}
