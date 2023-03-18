import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SideBar from '../components/SideBar'

export default function Home() {
  const [ products, setProducts ] = useState([])
  const { categoryList } = useParams();

  useEffect(() => { 
    fetch('https://dummyjson.com/products?limit=100')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])

  

  return (
    <main className='indexMain'>
        <SideBar />
        <hr className='catagoryHr' />
        <div className='selection'>
            {products.filter(item => item.category === categoryList).map(product => <ProductCard key={product.id} product={product} />)}
            <div className="addedToCart">
                &#10003; Added to cart
            </div>
        </div>
    </main>
  )
}
