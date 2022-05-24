import React from 'react';
import Image from 'react-image-webp';

const CheckoutItem = (props) => {
    const { currentItem, items, setItems, cartItems, setCartItems } = props;

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        const newItems = [...items];
        newItems.find(item => item.id === currentItem.id).quantity = value;
        setItems(newItems);
    };

    const deleteItem = () => {
        const newItems = [...items];
        setCartItems(cartItems - newItems.find(item => item.id === currentItem.id).quantity);
        newItems.find(item => item.id === currentItem.id).quantity = 0;
        setItems(newItems);
    };

    const addItem = () => {
        const newItems = [...items];
        newItems.find(item => item.id === currentItem.id).quantity += 1;
        setItems(newItems);
        setCartItems(cartItems+1);
    }

    const subtractItem = () => {
        const newItems = [...items];
        newItems.find(item => item.id === currentItem.id).quantity -= 1;
        setItems(newItems);
        setCartItems(cartItems-1);
    }

    return (
        <div className="checkout-item">
            <Image
                webp={currentItem.source}
                alt={currentItem.name}
                className="card-checkout"
            />
            <div>
                {currentItem.name}
            </div>
            <div>
                ${currentItem.price}
            </div>
            <div className="modify-btns">
                <button onClick={subtractItem} className="modify-btn decrement">-</button>
                <div>
                    <input
                        onChange={handleInputChange}
                        className="input-item"
                        type="number"
                        name="items"
                        value={currentItem.quantity}
                        required
                    />
                </div>
                <button onClick={addItem} className="modify-btn increment">+</button>
            </div>
            <div>
                ${(currentItem.price*currentItem.quantity).toFixed(2)}
            </div>
            <button onClick={deleteItem} className="modify-btn">x</button>
        </div>
    );
  };

export default CheckoutItem;