import App from './components/App';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/style.css";

const RouteSwitch = () => {
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="shop" element={<Shop />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;