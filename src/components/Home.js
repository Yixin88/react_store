import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartNum } from '../context/NumInCart'
import QueryContext, { SearchQuery } from '../context/QueryContext'
import Cart from './Cart'
import ProductCard from './ProductCard'
import SideBar from './SideBar'

export default function Home() {
  const [ products, setProducts ] = useState([])
  const {query, setQuery} = useContext(SearchQuery);

  useEffect(() => { 
    fetch('https://dummyjson.com/products?limit=100')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])


  function filteredQuery() {
    if (query === '') {
      return (
        products.map((product) => 
                <ProductCard key={product.id} product={product} />
            )
      )
    } else {
      const filteredArray = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase()))
      return (
        filteredArray.map(item => <ProductCard key={item.id} product={item} />)
      )
    }
  }

  return (
    <main className='indexMain'>
        <SideBar />
        <hr className='catagoryHr' />
        <div className='selection'>
            {filteredQuery()}
            <div className="addedToCart">
                &#10003; Added to cart
            </div>
        </div>
    </main>
  )
}
