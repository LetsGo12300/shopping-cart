import CheckoutItem from './CheckoutItem';
import React from 'react';

const Cart = (props) => {
    const { items, setItems, cartItems, setCartItems } = props;
    const checkoutItems = items.filter(item => item.quantity > 0);

    return (
      <div className="container">
          <h2>Shopping Cart</h2>
          <div className="checkout-table">
            {checkoutItems.map(item => {
                return <CheckoutItem key={item.id} currentItem={item} items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>
            })}
          </div>
      </div>
    );
  };

export default Cart;