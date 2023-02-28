import React from 'react'
import { useContext } from 'react'
import NumInCart, { CartNum } from '../context/NumInCart'

export default function ProductCard({product}) {
  const addedToCartNotification = document.querySelector(".addedToCart");

  const { addToCart } = useContext(CartNum)
  function popUp() {
    addedToCartNotification.classList.add('active');
    setTimeout(() => {
        addedToCartNotification.classList.remove('active');
    }, 1000);
  }

  return (
    <div className='productCard'>
        <div className="productImageContainer">
            <img className="thumbnail" src={product.images[0]} />
        </div>
        <h2 className="title" >{product.title}</h2>
        <h3>{product.category}</h3>
        <span hidden className="productId">{product.id}</span>
        <span className="rating">{product.rating}/5 ⭐️</span>
        <span className="price">£{product.price}</span>
        <button className='addToCartBtn' onClick={()=> {addToCart(); popUp()}}>Add to Cart</button>
    </div>
  )
}
