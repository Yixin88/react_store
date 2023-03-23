import React from 'react'
import Home from '../components/ProductMain'
import SideBar from '../components/SideBar'

export default function StorePageLayout() {
  return (
    <main className='indexMain'>
        <SideBar />
        <hr className='catagoryHr' />
        <Home />
    </main>
  )
}
