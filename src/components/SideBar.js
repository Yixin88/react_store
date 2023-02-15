import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function SideBar() {

    const [ category, setCategory ] = useState([])

    useEffect(()=> {
        fetch("https://dummyjson.com/products/categories")
        .then(response => response.json())
        .then(data => {
            const toUpper = data.map((element) => element.toUpperCase())
            setCategory(toUpper)
        })
    }, [])

    return (
    <nav className='catagoryNav'>
        {category.map((item)=> {
            return(<NavLink key={uuidv4()}>{item}</NavLink>)
        })}
    </nav>
  )
}
