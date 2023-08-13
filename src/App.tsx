import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/home/home'
import Pizza from './pages/pizza/pizza'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />} />
              <Route path={'/pizzas/:id'} element={<Pizza />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
