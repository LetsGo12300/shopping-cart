import React, { useState, useEffect } from 'react';

const Total = (props) => {
    const { items } = props;
    const [total, setTotal] = useState(0);

    useEffect(() => {
      function getTotal(){
        return items.map(item => item.quantity * item.price)
              .reduce((sum, product) => sum + product, 0);
      }

      setTotal(getTotal().toFixed(2));
    }, [items]);

    const showAlert = () => {
        window.alert('Successfully checked out!');
    };

    return (
        <div className="cart-total">
            Total: <div className="checkout-total">${total}</div>
            <button onClick={showAlert} className="checkout-btn">CHECK OUT</button>
        </div>
    );
};

export default Total;