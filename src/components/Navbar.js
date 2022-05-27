import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar-title">BEST BUYS</h2>
            <div>
                <ul className="links">
                    <li>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to="shop" className='link'>Shop</Link>
                    </li>
                    <li>
                        <Link to="cart" className='link'>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;