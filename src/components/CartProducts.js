import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartNum } from '../context/NumInCartContext';

export default function CartProducts({ item }) {
    const { addItemToCart, minusFromCart, removeFromCart } = useContext(CartNum)


    return (
        <div className='cartCard'>
            <div className="cartCardImg">
                <img src={item.images[0]} alt="product" />
            </div>
            <div className='cartCard-right'>
                <div className='cartCartDetail'>
                    <NavLink className='cartCartProduct' to={`/products/${item.id}`}>{item.title}</NavLink>
                    <span className='cartPrice'>£{item.price}/Unit</span>
                </div>
                <div className="quantityContainer">
                    <button className="quantityBtn quantityMinus" onClick={()=>minusFromCart(item)}><i class="fa-sharp fa-solid fa-minus"></i></button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantityBtn quantityPlus" onClick={()=>addItemToCart(item)}><i class="fa-solid fa-plus"></i></button>
                    <button className="deleteBtn" onClick={()=>removeFromCart(item)}><img src={require("../assets/trash-bin.png")} alt="delete icon" width="40px" /></button>
                </div>
            </div>
    </div>
    )
}
