import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/home/home'


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
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
