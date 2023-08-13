import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Pizza from './pages/pizza/pizza'
import Ingredients from './pages/ingredients/ingredients'
import Ingredient from './pages/ingredient/ingredient'
import Operations from './pages/operations/operations'
import Operation from './pages/operation/operation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
                    <Route path={'/ingredients/:id'} element={<Ingredient />} />
                    <Route path={'/operations'} element={<Operations />} />
                    <Route path={'/operations/:id'} element={<Operation />} />
                </Routes>
                <ToastContainer
                    position='top-left'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
            </BrowserRouter>
        </QueryClientProvider>
    )
}
export default App
