import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import StickyCart from './components/StickyCart';
import Cart from './components/Cart';
import ShopItem from './components/ShopItem';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/style.css";
import itemsStorage from './items/Items';
import { ShopContext } from './contexts/ShopContext';

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState(0);
    const [items, setItems] = useState(itemsStorage);

    return (
        <ShopContext.Provider value={{cartItems, setCartItems, items, setItems}}>
            <BrowserRouter basename='/shopping-cart'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/shop/:itemId" element={<ShopItem/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                </Routes>
                <StickyCart/>
            </BrowserRouter>
        </ShopContext.Provider>
    );
};

export default RouteSwitch;