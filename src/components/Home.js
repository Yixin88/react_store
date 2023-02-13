import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartNum } from '../context/NumInCart'

export default function Home() {
  const {cart, addToCart} = useContext(CartNum)
  const [ products, setProducts ] = useState([])

  useEffect(() => { 
    fetch('https://dummyjson.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])


  return (
    <div>Home
        {/* {products.map((product) => {
            return (
                <div key={product.id}>
                    <div className="productImageContainer">
                        <img className="thumbnail" src={product.img[0]} />
                    </div>
                    <h2 className="title" >{product.title}</h2>
                    <h3>{product.category}</h3>
                    <span hidden className="productId">{product.id}</span>
                    <span className="rating">{product.rating}/5 ⭐️</span>
                    <span className="price">£{product.price}</span>
                    <button className="addToCartBtn" >Add to cart</button>
                </div>
            )
        })} */}




        <button onClick={()=> addToCart()}>Add to Cart</button>
    </div>
  )
}
