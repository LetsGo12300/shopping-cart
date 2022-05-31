import CheckoutItem from './CheckoutItem';
import React, { useContext, useEffect } from 'react';
import Total from './Total';
import { ShopContext } from '../contexts/ShopContext';

const Cart = () => {
    const { items, setItems, cartItems, setCartItems } = useContext(ShopContext) ;
    const checkoutItems = items.filter(item => item.quantity > 0);

    useEffect(() => {
      document.title = "Best Buys - Checkout";
    });

    return (
      <div className="container">
          <div className="abril title">Shopping Cart</div>
          <div className="checkout-table">
            {checkoutItems.map(item => {
                return <CheckoutItem 
                        key={item.id} 
                        currentItem={item} 
                        items={items} 
                        setItems={setItems} 
                        cartItems={cartItems} 
                        setCartItems={setCartItems}
                        />
            })}
            { checkoutItems.length > 0 && <Total items={items}/> }
          </div>
          { checkoutItems.length === 0 && <div className="empty-cart">Your cart is empty</div>}
          
      </div>
    );
  };

export default Cart;