import { useContext, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { CartNum } from '../context/NumInCartContext'
import { SearchQuery } from '../context/QueryContext'
import MobileNav from '../components/MobileNav';
import BackToTopBtn from '../components/BackToTopBtn'

export default function RootLayout() {
  const {cart} = useContext(CartNum)
  const {setQuery} = useContext(SearchQuery)

  const [searchInputValue, setSearchInputVaue] = useState('');

  const navigate = useNavigate();

  function enterPressed(e) {
    let code = e.keyCode || e.which;
    if(code === 13) {
        setQuery(searchInputValue)
        navigate("/")
        document.getElementById('search').blur()
        document.getElementById('small-search').blur()
    } 
  }

  return (
    <>
        <header className="mainHeader">
            <nav className="mainNav">
                <div className='hamburger_container'>
                    <MobileNav />
                    <NavLink className="amazonLogoContainer" onClick={() => setQuery('')} to="/"><img src={require("../assets/amazon_logo.png")} alt="Amzon Logo" className="logo mainLogo" /></NavLink>
                </div>
                <div className="searchContainer">
                    <select className="dropdownMenu">
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="men">Men</option>
                        <option value="woman">Woman</option>
                    </select>
                    <input onKeyPress={enterPressed} type="text" name="search" id="search" value={searchInputValue} onChange={e => setSearchInputVaue(e.target.value)} placeholder="Search" />
                    <NavLink to='/' onClick={() => setQuery(searchInputValue)} className="searchIconContainer">
                        <img className="searchIcon" src={require("../assets/search.png")} alt="search button" />
                    </NavLink>
                </div>
                <div className="headerRight">
                    <span className="user">Welcome</span>
                    <NavLink to={"cart"} className="cartDetail">
                        <img className="shoppingCartIcon" src={require("../assets/shopping-cart.png")} alt="shopping cart icon" />
                        <span className="cartNumber">{cart}</span>
                    </NavLink>
                </div>
            </nav>
            <div className='small-search-bar'>
                <input onKeyPress={enterPressed} type="text" name="search" id="small-search" value={searchInputValue} onChange={e => setSearchInputVaue(e.target.value)} placeholder="Search" />
                <NavLink to='/' onClick={() => setQuery(searchInputValue)} className="searchIconContainer">
                    <img className="searchIcon" src={require("../assets/search.png")} alt="search button" />
                </NavLink>
            </div>
            <nav className="subHeader">
                <NavLink to='deals'>Today's Deals</NavLink>
                <NavLink to='gift'>Gift Cards & Top Up</NavLink>
                {/* <NavLink to='DimeVideo'>Dime Video</NavLink>
                <NavLink to='vouchers'>Vouchers</NavLink>
                <NavLink to='BuyAgain'>Buy Again</NavLink> */}
                <a href='#'>Dime Video</a>
                <a href='#'>Vouchers</a>
                <a href='#'>Buy Again</a>
            </nav>
        </header>
        
        <BackToTopBtn />
        <Outlet />
        
        <Footer />
    </>
  )
}