import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams();
  const [ product, setProduct ] = useState([])
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res=>res.json())
      .then(json=> {
        setProduct(json)
        setLoading(false)
      })}, [])


  return (
    <main className='subpageMain'>
        {/* {productDetail(products)} */}
        {loading ? <h1>Loading...</h1> 
            : 
            <h1>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</h1>}
    </main>
  )
}
