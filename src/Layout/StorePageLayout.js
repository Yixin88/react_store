import React from 'react'
import Home from '../components/Home'
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
