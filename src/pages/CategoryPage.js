import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [ products, setProducts ] = useState([])
  const { categoryList } = useParams();

  const navigate = useNavigate();

  useEffect(() => { 
    fetch('https://dummyjson.com/products?limit=100')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])

  const filteredCategory = products.filter(item => item.category === categoryList);
  const filteredCategoryMapped = filteredCategory.map(product => <ProductCard key={product.id} product={product} />)

  return (
    <section className='selection'>
        {filteredCategory.length === 0 ? navigate('*') : filteredCategoryMapped}
        <div className="addedToCart">
            &#10003; Added to cart
        </div>
    </section>
  )
}
