import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddedToCartPopUp from '../components/AddedToCartPopUp';
import { CartNum } from '../context/NumInCartContext';

export default function ProductPage() {
  const addedToCartNotification = document.querySelector(".addedToCart");
  const { id } = useParams();
  const [ product, setProduct ] = useState([])
  const [ loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartNum);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res=>res.json())
      .then(json=> {
        setProduct(json)
        setLoading(false)
      })}, [])

    function popUp() {
    addedToCartNotification.classList.add('active');
    setTimeout(() => {
        addedToCartNotification.classList.remove('active');
    }, 1000);
    }

  return (
    <main className='subpageMain'>
        {loading ? <div className='productPageLoading'><h1>Loading...</h1></div>
            : 
        <div className='productPageContent'>
            <div class="productPageLeft">
                <div className="productPageLeftImg">
                    <img className="productImg" src={product.images[0]} alt='product thumbnail'/>
                </div>
            </div>
            <div className='productPageRight'>
                <h1 className="productTitle">{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</h1>
                <h3 className="productBrand">{product.brand}</h3>
                <p className="productDes">{product.description}</p>
                <p className="productStock">Stocks Remaining: {product.stock}</p>
                <span className="productRating">Rating: {product.rating}/5⭐️</span>
                <p className="productPrice">£{product.price}</p>
                <button className="popUpAddToCartBtn" onClick={()=> {addToCart(); popUp()}}>Add To Cart</button>
            </div>
        </div>}
        <AddedToCartPopUp />
    </main>
  )
}
