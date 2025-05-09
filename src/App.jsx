import { Routes, Route } from "react-router"

import { CartProvider } from './context/cartCntext'

import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
function App() {
    return (
        <CartProvider>
            <div className="container">
                <Navbar></Navbar>
                <Routes>
                    <Route index element={<Shop />}></Route>
                </Routes>
            </div>
        </CartProvider>
    )
}

export default App