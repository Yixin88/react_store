import React, { useContext } from 'react'
import { CartNum } from '../context/NumInCartContext';

export default function CartProducts({ item }) {
    const { addItemToCart, minusFromCart } = useContext(CartNum)


    return (
        <div className='cartCard'>
            <div className="cartCardImg">
                <img src={item.images[0]} alt="product" />
            </div>
            <div className='cartCartDetail'>
                <h3 className='cartCartProduct'>{item.title}</h3>
                <span className='cartPrice'>£{item.price}/Unit</span>
            </div>
            <div className="quantityContainer">
                <button className="quantityBtn quantityMinus" onClick={()=>minusFromCart(item)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantityBtn quantityPlus" onClick={()=>addItemToCart(item)}>+</button>
                <button className="deleteBtn"><img src={require("../assets/trash-bin.png")} alt="delete icon" width="40px" /></button>
            </div>
    </div>
    )
}
