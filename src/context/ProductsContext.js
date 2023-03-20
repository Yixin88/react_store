import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

export default function ProductsContextProvider({children}) {
  const [ products, setProducts] = useState([]);

  useEffect(() => { 
      fetch('https://dummyjson.com/products?limit=100')
      .then(res=>res.json())
      .then(json=> setProducts(json.products))}
      ,[])

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider>
  )
}
