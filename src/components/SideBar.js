import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { CategoryList } from '../context/CategoryContext'

export default function SideBar() {
    const { category } = useContext(CategoryList);

    function nonActiveNavBar() {
        const menu_btn = document.querySelector('.hamburger');
        const mobile_btn = document.querySelector('.mobile-catagoryNav');
        mobile_btn.classList.remove('is-active');
        menu_btn.classList.remove('is-active');
    }

    return (
    <>
        <nav className='catagoryNav'>
            {category.map((item)=> {
                return(<NavLink key={uuidv4()} to={'/' + item.toLowerCase()}>{item}</NavLink>)
            })}
        </nav>
        <nav className='mobile-catagoryNav'>
            <div className='closeBtnContainer'>
                <h3 className='mobile-category-title'>Category</h3>
                <button className='closeNavBtn' onClick={() => nonActiveNavBar()}>x</button>
            </div>
            {category.map((item)=> {
                return(<NavLink onClick={() => nonActiveNavBar()} className='mobile-nav-btn' key={uuidv4()} to={'/' + item.toLowerCase()}>{item}</NavLink>)
            })}
        </nav>
    </>
  )
}
