import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
        <header class="mainHeader">
            <nav class="mainNav">
                <img src={require("../assets/store_logo.png")} alt="Amzon Logo" class="logo mainLogo" />
                <div class="searchContainer">
                    <select class="dropdownMenu">
                        <option value="all" selected>All</option>
                        <option value="books">Books</option>
                        <option value="men">Men</option>
                        <option value="woman">Woman</option>
                    </select>
                    <input type="text" name="search" id="search" placeholder="Search" />
                    <button class="searchIconContainer">
                        <img class="searchIcon" src={require("../assets/search.png")} alt="search button" />
                    </button>
                </div>
                <div class="headerRight">
                    <span class="user">Hello User</span>
                    <div class="cartDetail">
                        <img class="shoppingCartIcon" src={require("../assets/shopping-cart.png")} alt="shopping cart icon" />
                        <span class="cartNumber">0</span>
                    </div>
                </div>
            </nav>
            <nav class="subHeader">
                <NavLink to='deals'>Last Minute Deals</NavLink>
                <NavLink to='gift'>Gift Cards & Top Up</NavLink>
                <NavLink to='DimeVideo'>Dime Video</NavLink>
                <NavLink to='vouchers'>Vouchers</NavLink>
                <NavLink to='BuyAgain'>Buy Again</NavLink>
            </nav>
        </header>
        <Outlet />
    </>
  )
}
