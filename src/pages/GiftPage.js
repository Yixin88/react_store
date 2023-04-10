import React, { useContext } from 'react'
import { CartNum } from '../context/NumInCartContext';
import AddedToCartPopUp from '../components/AddedToCartPopUp'

export default function GiftPage() {
  const giftCards = [
    {
    "id": 101,
    "title": "Amazon Gift Card £50",
    "description": "Amazon Gift Card £50",
    "price": 50,
    "discountPercentage": 0,
    "rating": 5,
    "stock": 100,
    "brand": "Amazon",
    "category": "Giftcard",
    "thumbnail": "...",
    "images": ["https://cdn-icons-png.flaticon.com/512/2611/2611152.png"]
  },
  {
    "id": 102,
    "title": "Amazon Gift Card £100",
    "description": "Amazon Gift Card £100",
    "price": 100,
    "discountPercentage": 0,
    "rating": 5,
    "stock": 100,
    "brand": "Amazon",
    "category": "Giftcard",
    "thumbnail": "...",
    "images": ["https://cdn-icons-png.flaticon.com/512/2611/2611152.png"]
  },
  {
    "id": 103,
    "title": "Amazon GiftCard £200",
    "description": "Amazon Gift Card £200",
    "price": 200,
    "discountPercentage": 0,
    "rating": 5,
    "stock": 100,
    "brand": "Amazon",
    "category": "Giftcard",
    "thumbnail": "...",
    "images": ["https://cdn-icons-png.flaticon.com/512/2611/2611152.png"]
  },
  {
    "id": 104,
    "title": "Amazon Gift Card £500",
    "description": "Amazon Gift Card £500",
    "price": 500,
    "discountPercentage": 0,
    "rating": 5,
    "stock": 100,
    "brand": "Amazon",
    "category": "Giftcard",
    "thumbnail": "...",
    "images": ["https://cdn-icons-png.flaticon.com/512/2611/2611152.png"]
  }];

  const { popUp, addItemToCart } = useContext(CartNum)

  return (
    <main className='subpageMain'>
      <h1>Gift Cards Selections</h1>
      <div className="giftContainer">
        {giftCards.map(card => {
          return( 
          <div key={card.id} className="giftCard">
            <img src={card.images[0]} alt="giftcard icon" />
            <div className='giftCardDetail'>
                <h2>{card.title}</h2>
                <button className='addToCartBtn' onClick={()=> {popUp(); addItemToCart(card)}}>Add to Cart</button>
            </div>
          </div>
          )
        })}
      </div>
      <AddedToCartPopUp />
    </main>
  )
}
