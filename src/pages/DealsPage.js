import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DealsPage() {
  return (
    <main className='subpageMain'>
        <div className="slider">
          <NavLink to='/products/6'><img src={require("../assets/dealsImage/slide1.png")} alt="macbook deal" /></NavLink>
          <NavLink to='/products/16'><img src={require("../assets/dealsImage/slide2.png")} alt="face serum deal" /></NavLink>
          <NavLink to='/products/2'><img src={require("../assets/dealsImage/slide3.png")} alt="iphone deal" /></NavLink>
        </div>
    </main>
  )
}
