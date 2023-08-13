import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Pizza from './pages/pizza/pizza'
import Ingredients from './pages/ingredients/ingredients'

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
                    <Route path='/' element={<Home />} />
                    <Route path={'/pizzas/:id'} element={<Pizza />} />
                    <Route path={'/ingredients'} element={<Ingredients />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
export default App
