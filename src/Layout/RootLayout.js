import React from 'react'

export default function RootLayout() {
  return (
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
            <a href="#">Last Minute Deals</a>
            <a href="#">Gift Cards & Top Up</a>
            <a href="#">Dime Video</a>
            <a href="#">Vouchers</a>
            <a href="#">Buy Again</a>
        </nav>
    </header>
  )
}
