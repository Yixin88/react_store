import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { CategoryList } from '../context/CategoryContext';
import { nonActiveNavBar } from '../util/AddOrRemoveMobileNav'

export default function MobileNav() {
  const { category } = useContext(CategoryList);

  return (
    <nav className='mobile-catagoryNav'>
        <div className='closeBtnContainer'>
            <h3 className='mobile-category-title'>Category</h3>
            <button className='closeNavBtn' onClick={() => nonActiveNavBar()}>x</button>
        </div>
        <div className='mobileNavCategoryContainer'>
            {category.map((item)=> {
                return(<NavLink onClick={() => nonActiveNavBar()} className='mobile-nav-btn' key={uuidv4()} to={'/' + item.toLowerCase()}>{item}</NavLink>)
            })}
        </div>
    </nav>
  )
}
