import React from 'react'
import Header  from './components/Header'
import FilterBar  from './components/FilterBar'
import { FilterContextProvider } from './context/FilterContext'
import ProductList from './components/ProductsList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const client = new QueryClient();

  return (
    <>
    <FilterContextProvider>
      <QueryClientProvider client={client}>
        <Header/>
        <FilterBar/>
        <ProductList/>
      </QueryClientProvider>
    </FilterContextProvider>
    </>
  )
}

export default App
