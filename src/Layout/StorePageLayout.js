import React from 'react'
import Home from '../components/Home'
import SideBar from '../components/SideBar'

export default function StorePageLayout() {
  return (
    <>
        <SideBar />
        <hr className='catagoryHr' />
        <Home />
    </>
  )
}
