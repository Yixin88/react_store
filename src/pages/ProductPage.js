import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext';

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  function productDetail(productsList) {
    const details = productsList.filter(item => item.id === parseInt(id))[0];
    return (
        <p>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
        </p>
    )
  }

  return (
    <main className='subpageMain'>
        {productDetail(products)}
    </main>
  )
}
