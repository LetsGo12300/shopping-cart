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

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState(0);
    const [items, setItems] = useState(itemsStorage);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} items={items}/>}></Route>
                <Route path="/shop/:itemId" element={<ShopItem items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
                <Route path="cart" element={<Cart items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            </Routes>
            <StickyCart cartItems={cartItems} />
        </BrowserRouter>
    );
};

export default RouteSwitch;