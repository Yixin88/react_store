import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddedToCartPopUp from '../components/AddedToCartPopUp';
import ProductDetails from '../components/ProductDetails';

export default function ProductPage() {
  const { id } = useParams();
  const [ product, setProduct ] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [ imageArray, setImageArray ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res=>res.json())
      .then(json=> {
        setProduct(json)
        setLoading(false)
        setImageArray(json.images)
      }).catch(error => console.log(error))}, [])

  return (
    <main className='subpageMain'>
        {loading ? <div className='productPageLoading'><h1>Loading...</h1></div>
            : 
            Object.keys(product).length !== 1 ? 
            <ProductDetails product={product} imageArray={imageArray} />
            : 
            navigate('/error/*')}
            
            <AddedToCartPopUp />
    </main>
  )
}
