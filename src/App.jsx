import { Routes, Route } from "react-router"

import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
function App() {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Routes>
                <Route index element={<Shop />}></Route>
            </Routes>
        </div>
    )
}

export default App