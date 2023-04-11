import React from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { SearchQuery } from '../context/QueryContext'
import AddedToCartPopUp from './AddedToCartPopUp'
import ProductCard from './ProductCard'

export default function Home() {
  const { query } = useContext(SearchQuery);
  const { products, loading } = useContext(ProductsContext);
  const { categoryList } = useParams();
  const navigate = useNavigate();

  const numberOfItems = 24;
  const shuffledArray = shuffleArray(products).slice(0, numberOfItems);

  let filteredCategory = products.filter(item => item.category === categoryList);
  const productCategoryList = [...new Set(products.map(item => item.category))]

  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  function filteredQuery() {
    if (query === '' && filteredCategory.length < 1) {
      return(
        productCategoryList.includes(categoryList) || categoryList === undefined ?
       
          shuffledArray.map((product) => 
                  <ProductCard key={product.id} product={product} />
              )
         :
        navigate('/error/*')
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
        {loading ? <h1 className='loadingText'>Loading...</h1> : filteredQuery()}
        <AddedToCartPopUp />
    </section>
  )
}
