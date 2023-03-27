import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddedToCartPopUp from '../components/AddedToCartPopUp';
import { CartNum } from '../context/NumInCartContext';

export default function ProductPage() {
  const addedToCartNotification = document.querySelector(".addedToCart");
  const { id } = useParams();
  const [ product, setProduct ] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [ imageArray, setImageArray ] = useState([]);
  const [ imageIndex, setImageIndex ] = useState(0);
  const { addToCart } = useContext(CartNum);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res=>res.json())
      .then(json=> {
        setProduct(json)
        setLoading(false)
        setImageArray(json.images)
      }).catch(error => console.log(error))}, [])

    function popUp() {
        addedToCartNotification.classList.add('active');
        setTimeout(() => {
            addedToCartNotification.classList.remove('active');
        }, 1000);
    }

    function nextImage() {
        if (imageArray.length > imageIndex + 1) {
            setImageIndex(prev => prev + 1)
        } else {
            setImageIndex(0);
        }
    }

    function prevImage() {
        console.log('image index: '+imageIndex)
        console.log('array length: '+imageArray.length)
        if (imageIndex === 0) {
            setImageIndex(imageArray.length - 1)
        } else {
            setImageIndex(prev => prev - 1)
        }
    }

  return (
    <main className='subpageMain'>
        {loading ? <div className='productPageLoading'><h1>Loading...</h1></div>
            : 
            Object.keys(product).length !== 1 ? 
            <div className='productPageContent'>
                <div className="productPageLeft">
                    <button className="prevImg" onClick={() => prevImage()}>&#10094;</button>
                    <div className="productPageLeftImg">
                        <img className="productImg" src={imageArray[imageIndex]} alt='product thumbnail'/>
                    </div>
                    <button className="nextImg" onClick={() => nextImage()}>&#10095;</button>
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
            </div> 
            : 
            navigate('/error/*')}
            
            <AddedToCartPopUp />
    </main>
  )
}
