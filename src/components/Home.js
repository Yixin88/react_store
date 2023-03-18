import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { SearchQuery } from '../context/QueryContext'
import ProductCard from './ProductCard'

export default function Home() {
  const [ products, setProducts ] = useState([])
  const {query} = useContext(SearchQuery);

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
    <section className='selection'>
        {filteredQuery()}
        <div className="addedToCart">
            &#10003; Added to cart
        </div>
    </section>
  )
}
