import React, { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { Link } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';

const StickyCart = () => {
    const { cartItems } = useContext(ShopContext);
    return (
        <div className="cart-container">
            <div>{cartItems} items in your cart</div>
            <Link to="cart">
                <Icon 
                    className="shopping-cart" 
                    path={mdiCart} 
                    size={1.25}>
                </Icon>
            </Link>
            
        </div>
    );
};

export default StickyCart;