import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { SearchQuery } from '../context/QueryContext'
import ProductCard from './ProductCard'

export default function Home() {
  const { query } = useContext(SearchQuery);
  const { products } = useContext(ProductsContext);
  const { categoryList } = useParams();

  let filteredCategory = products.filter(item => item.category === categoryList);

  function filteredQuery() {
    if (query === '' && filteredCategory.length < 1) {
      return (
        products.map((product) => 
                <ProductCard key={product.id} product={product} />
            )
      )
    } else if (filteredCategory.length > 0) {
      return (
        filteredCategory.map(product => <ProductCard key={product.id} product={product} />)
        )
    } else {
      const filteredArray = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase()))
      return (filteredArray.length === 0 ? 
                <div className='noResults'>
                  <h2>No Results</h2>
                  <h3>Please try again</h3>
                </div>
                : 
                filteredArray.map(item => <ProductCard key={item.id} product={item} />))
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
