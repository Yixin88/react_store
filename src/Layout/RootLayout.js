import { useContext, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { CartNum } from '../context/NumInCart'
import { SearchQuery } from '../context/QueryContext'

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
    } 
  }

  return (
    <>
        <header className="mainHeader">
            <nav className="mainNav">
                <NavLink onClick={() => setQuery('')} to="/"><img src={require("../assets/store_logo.png")} alt="Amzon Logo" className="logo mainLogo" /></NavLink>
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
                    <span className="user">Hello User</span>
                    <div className="cartDetail">
                        <img className="shoppingCartIcon" src={require("../assets/shopping-cart.png")} alt="shopping cart icon" />
                        <span className="cartNumber">{cart}</span>
                    </div>
                </div>
            </nav>
            <nav className="subHeader">
                <NavLink to='deals'>Last Minute Deals</NavLink>
                <NavLink to='gift'>Gift Cards & Top Up</NavLink>
                <NavLink to='DimeVideo'>Dime Video</NavLink>
                <NavLink to='vouchers'>Vouchers</NavLink>
                <NavLink to='BuyAgain'>Buy Again</NavLink>
            </nav>
        </header>
        
        <main className='indexMain'>
            <Outlet />
        </main>
        
        <Footer />
    </>
  )
}