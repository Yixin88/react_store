import React from 'react'
import Home from '../components/ProductMain'
import SideBar from '../components/SideBar'
import ScrollToTop from '../util/ScrollToTop'

export default function StorePageLayout() {
  return (
    <main className='indexMain'>
      <ScrollToTop />
        <SideBar />
        <hr className='catagoryHr' />
        <Home />
    </main>
  )
}
