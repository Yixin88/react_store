import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { CategoryList } from '../context/CategoryContext'

export default function SideBar() {
    const { category } = useContext(CategoryList);

    return (
    <nav className='catagoryNav'>
        {category.map((item)=> {
            return(<NavLink key={uuidv4()} to={'/' + item.toLowerCase()}>{item}</NavLink>)
        })}
    </nav>
  )
}
