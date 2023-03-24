import React, { createContext, useEffect, useState } from 'react'

export const CategoryList = createContext();

export default function CategoryContext({children}) {
  
  const [ category, setCategory ] = useState([]);

  useEffect(()=> {
    fetch("https://dummyjson.com/products/categories")
    .then(response => response.json())
    .then(data => {
        const toUpper = data.map((element) => element.toUpperCase())
        setCategory(toUpper)
    })
}, [])

  return (
    <CategoryList.Provider value={{category, setCategory}}>
        {children}
    </CategoryList.Provider>
  )
}
