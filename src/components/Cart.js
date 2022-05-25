import CheckoutItem from './CheckoutItem';
import React from 'react';
import Total from './Total';

const Cart = (props) => {
    const { items, setItems, cartItems, setCartItems } = props;
    const checkoutItems = items.filter(item => item.quantity > 0);

    return (
      <div className="container">
          <div className="abril title">Shopping Cart</div>
          <div className="checkout-table">
            {checkoutItems.map(item => {
                return <CheckoutItem key={item.id} currentItem={item} items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>
            })}
          </div>
          { checkoutItems.length === 0 && <div className="empty-cart">Your cart is empty</div>}
          { checkoutItems.length > 0 && <Total items={items}/> }
      </div>
    );
  };

export default Cart;