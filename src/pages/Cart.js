import React, { useContext } from 'react'
import { CartNum } from '../context/NumInCartContext'

export default function Cart() {
  const { cart, itemsInCart } = useContext(CartNum);
  return (
    <main className='subpageMain'>
      <h1>{cart}</h1>
      {itemsInCart.map(item => {
        return (<div key={item.id}>
          <p>{item.title}</p>
          <p>{item.quantity}</p>
        </div>)
      })}
    </main>
  )
}
