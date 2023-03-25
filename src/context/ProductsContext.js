import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

export default function ProductsContextProvider({children}) {
  const [ products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect(() => { 
      fetch('https://dummyjson.com/products?limit=100')
      .then(res=>res.json())
      .then(json=> {
        setProducts(json.products)
        setLoading(false)
      })}
      ,[])

  return (
    <ProductsContext.Provider value={{products, setProducts, loading}}>
        {children}
    </ProductsContext.Provider>
  )
}
