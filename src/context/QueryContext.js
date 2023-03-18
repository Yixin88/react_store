import React, { createContext, useState } from 'react'

export const SearchQuery = createContext();

export default function QueryContext({children}) {

  const [query, setQuery] = useState('');


  return (
    <SearchQuery.Provider value={{query, setQuery}}>
        {children}
    </SearchQuery.Provider>
  )
}
