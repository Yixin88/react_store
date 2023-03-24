import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext';

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
//   const products = [{id: 4, title: 'Huawei P30'}, {id: 5, title: 'iphone P30'}]
  const productDetail = products.filter(item => item.id === parseInt(id))[0];
//   const productDetail = products.reduce((object, item) => item.id === parseInt(id)); 
  console.log(productDetail)

  return (
    <main className='subpageMain'>
        {/* <h1>{productDetail.title}</h1> */}
    </main>
  )
}
