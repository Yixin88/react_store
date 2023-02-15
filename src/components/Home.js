import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartNum } from '../context/NumInCart'
import Cart from './Cart'
import ProductCard from './ProductCard'
import SideBar from './SideBar'

export default function Home() {
  const [ products, setProducts ] = useState([])

  useEffect(() => { 
    fetch('https://dummyjson.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])


  return (
    <main className='indexMain'>
        <SideBar />
        <hr className='catagoryHr' />
        <div className='selection'>
            {products.map((product) => 
                <ProductCard key={product.id} product={product} />
            )}
    
            <div className="addedToCart">
                &#10003; Added to cart
            </div>
        </div>
    </main>
  )
}
