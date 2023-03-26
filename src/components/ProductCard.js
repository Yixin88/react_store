import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartNum } from '../context/NumInCartContext'

export default function ProductCard({product}) {


  const { addToCart, popUp } = useContext(CartNum)


  return (
    <div className='productCard'>
        <div className="productImageContainer">
          <NavLink to={`/products/${product.id}`}><img className="thumbnail" src={product.images[0]} alt='product thumbnail'/></NavLink>
        </div>
        <h2 className="title" ><NavLink to={`/products/${product.id}`}>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</NavLink ></h2>
        <h3>{product.category}</h3>
        <span hidden className="productId">{product.id}</span>
        <span className="rating">{product.rating}/5 ⭐️</span>
        <span className="price">£{product.price}</span>
        <button className='addToCartBtn' onClick={()=> {addToCart(); popUp()}}>Add to Cart</button>
    </div>
  )
}
