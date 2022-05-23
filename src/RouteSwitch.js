import App from './components/App';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import StickyCart from './components/StickyCart';
import Cart from './components/Cart';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/style.css";

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState(0);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="shop" element={<Shop setCartItems={setCartItems}/>}></Route>
                <Route path="cart" element={<Cart />}></Route>
            </Routes>
            <StickyCart cartItems={cartItems}/>
        </BrowserRouter>
    );
};

export default RouteSwitch;