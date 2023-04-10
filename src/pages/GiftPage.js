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
      <h2>Amazon Gift Cards & Gift Vouchers</h2>
      <p>When you want to give that special someone just what they're looking for, Amazon Gift Cards and Amazon Gift Vouchers are the perfect solution. Be it a birthday, wedding, anniversary, Christmas, Mother's Day, Father's Day, a thank you or a new baby present, a prize, a business incentive, or an employee reward, Amazon Gift Cards and Gift Vouchers are available in any denomination ranging from £50 to £500, and can be redeemed across the Amazon.co.uk website. Your recipient can choose to spend their Amazon Gift Cards right away, or apply the gift card code to their Amazon.co.uk account and use it any time on their Amazon.co.uk purchases for 10 years from the date of issuance.</p>
      <p>Amazon Gift Cards are available in a variety of formats and a wide selection of designs, ideal for all gifting needs, including last-minute gifts. E-mail gift vouchers instantly or schedule them up to a year in advance, or print gift vouchers at home, both giving you the option to personalise your gift by adding your own photo and personal message. Alternatively, send gift cards by post in complimentary packaging such as gift boxes and greetings cards, with Free One-Day Delivery within the UK. Amazon Gift Cards are also available in multi-packs for events or corporate incentives.</p>

      <h2>Terms and Conditions</h2>
      <ol className='termsOl'>
        <li>
          <h3>Redemption.</h3>
          <p>Amazon.co.uk Gift Cards and Gift Vouchers (including products branded as Gift Certificates) ("Gift Cards") may only be redeemed toward the purchase of eligible products on www.amazon.co.uk. Redemption of Gift Cards on any affiliated website is subject to change in our sole discretion. Purchases are deducted from the redeemer's Gift Card balance. Any unused Gift Card balance will be placed in the redeemer's Amazon.co.uk account. If a purchase exceeds the redeemer's Gift Card balance, the remaining amount must be paid with another payment method. Amazon EU S.à r.l. or its affiliates ("we", "us", and "our") may provide Gift Card purchasers with information about the redemption status of Gift Cards that they purchase. To view your Gift Card balance, visit Your Account on Amazon.co.uk. No fees apply to Gift Cards.</p>
        </li>
        <li>
          <h3>Limitations.</h3>
          <p>Gift Cards, including any unused Gift Card balances, expire ten years from the date of issuance. Gift Cards may not be redeemed for the purchase of products at www.amazon.at, www.amazon.com.br, www.amazon.ca, www.amazon.cn, www.amazon.com, www.amazon.de, www.amazon.es, www.amazon.fr, www.amazon.in, www.amazon.it, www.amazon.co.jp, www.amazon.com.mx, or any other website owned and operated by us, our affiliates, or any other person or entity, except as indicated by these terms and conditions. Gift Cards cannot be used to purchase other gift cards. Gift Cards cannot be reloaded, resold, transferred for value, used for unauthorised commercial purposes, including to facilitate the resale or shipment of goods from Amazon.co.uk, redeemed for cash, or used in a manner otherwise prohibited by our Amazon.co.uk Gift Cards Restrictions and Prohibited Activities policy. Unused Gift Card balances in an Amazon.co.uk account may not be transferred to another Amazon.co.uk account.</p>
        </li>
        <li>
          <h3>Risk of Loss.</h3>
          <p>The risk of loss and title for Gift Cards pass to the purchaser upon our electronic transmission of the Gift Card to the purchaser or designated recipient, or our delivery to the carrier, whichever is applicable. We are not responsible if any Gift Card is lost, stolen, destroyed or used without your permission.</p>
        </li>
        <li>
          <h3>Fraud.</h3>
          <p>We will have the right to close customer accounts and take payment from alternative forms of payment if a fraudulently obtained Gift Card is redeemed and/or used to make purchases on Amazon.co.uk or any of its affiliated websites set forth above.</p>
        </li>
        <li>
          <h3>Limitation of Liability.</h3>
          <p>WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO GIFT CARDS, INCLUDING WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN THE EVENT A GIFT CARD IS NON-FUNCTIONAL, YOUR SOLE REMEDY, AND OUR SOLE LIABILITY, WILL BE THE REPLACEMENT OF SUCH GIFT CARD. IF APPLICABLE LAW DOES NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
        </li>
        <li>
          <h3>General Terms.</h3>
          <p>The Amazon.co.uk Conditions of Use & Sale apply. Gift Cards are issued by Amazon EU S.à r.l., a Luxembourg entity. When you purchase, receive or redeem a Gift Card, you agree that the laws of the Grand-Duchy of Luxembourg will govern these Gift Card terms and conditions. We reserve the right to require additional verification of your identity, Gift Card or account ownership, or provision of an additional payment instrument, before you are able to apply a Gift Card to your account or your Amazon.co.uk Gift Card Balance to a purchase. We reserve the right to change these terms and conditions from time to time in our discretion. All terms and conditions are applicable to the extent permitted by law.</p>
        </li>
        <li className='test'>
          <h3>Previously Issued Gift Cards.</h3>
          <p>Gift Cards issued on or after July 1, 2013 may be redeemed toward the purchase of eligible products up to ten years from the date of issuance, notwithstanding any stated expiration date. Any Gift Cards issued prior to July 1, 2013 expire in accordance with their stated terms.</p>
        </li>
      </ol>

      
      <AddedToCartPopUp />
    </main>
  )
}
