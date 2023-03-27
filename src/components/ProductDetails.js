import React, { useContext, useState } from 'react'
import { CartNum } from '../context/NumInCartContext';

export default function ProductDetails({product, imageArray}) {
    const addedToCartNotification = document.querySelector(".addedToCart");
    const { addToCart } = useContext(CartNum);
    const [ imageIndex, setImageIndex ] = useState(0);

    function nextImage(imageIndex) {
        if (imageArray.length > imageIndex + 1) {
            setImageIndex(prev => prev + 1)
        } else {
            setImageIndex(0);
        }
    }

    function prevImage(imageIndex) {
        if (imageIndex === 0) {
            setImageIndex(imageArray.length - 1)
        } else {
            setImageIndex(prev => prev - 1)
        }
    }

    function popUp() {
        addedToCartNotification.classList.add('active');
        setTimeout(() => {
            addedToCartNotification.classList.remove('active');
        }, 1000);
    }

  return (
    <div className='productPageContent'>
                <div className="productPageLeft">
                    <button className="prevImg" onClick={() => prevImage(imageIndex)}>&#10094;</button>
                    <div className="productPageLeftImg">
                        <img className="productImg" src={imageArray[imageIndex]} alt='product thumbnail'/>
                    </div>
                    <button className="nextImg" onClick={() => nextImage(imageIndex)}>&#10095;</button>
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
  )
}
