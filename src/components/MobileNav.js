import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { CategoryList } from '../context/CategoryContext';

export default function MobileNav() {
  const { category } = useContext(CategoryList);
  const hamburger = useRef();
  const mobileNavBar = useRef();
  const overlay = useRef();

  function activeNavBar() {
    mobileNavBar.current.classList.add('is-active');
    overlay.current.classList.add('is-active');
  }

  function nonActiveNavBar() {
    mobileNavBar.current.classList.remove('is-active');
    overlay.current.classList.remove('is-active');
  }

  return (
    <>  
        <button ref={hamburger} onClick={activeNavBar} className='hamburger'>
            <div className='bar'></div>
        </button>
        <nav ref={mobileNavBar} className='mobile-catagoryNav'>
            <div className='closeBtnContainer'>
                <h3 className='mobile-category-title'>Category</h3>
                <button className='closeNavBtn' onClick={() => nonActiveNavBar()}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className='mobileNavCategoryContainer'>
                {category.map((item)=> {
                    return(<NavLink onClick={() => nonActiveNavBar()} className='mobile-nav-btn' key={uuidv4()} to={'/' + item.toLowerCase()}>{item}</NavLink>)
                })}
            </div>
        </nav>
        <div ref={overlay} onClick={() => nonActiveNavBar()} className='overlay'></div>
    </>
  )
}
