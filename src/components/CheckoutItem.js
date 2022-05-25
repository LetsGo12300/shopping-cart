import React, { useState } from 'react';
import Image from 'react-image-webp';

const CheckoutItem = (props) => {
    const { currentItem, items, setItems, cartItems, setCartItems } = props;
    const [ itemQuantity, setItemQuantity ] = useState(currentItem.quantity);

    const handleInputChange = (e) => {
        if (e.target.value){
            const value = parseInt(e.target.value);
            setItemQuantity(value);
        }
        else {
            setItemQuantity('');
        }
    };

    const handleInputBlur = (e) => {
        if (e.target.value){
            const value = parseInt(e.target.value);
            const newItems = [...items];
            newItems.find(item => item.id === currentItem.id).quantity = value;
            setItems(newItems);
            setCartItems(getCartItemsSum());
        } else {
            // set to same as before's value
            setItemQuantity(currentItem.quantity);
        }
    };

    const getCartItemsSum = () => {
        return items.map(item => item.quantity)
        .reduce((total, quantity) => total + quantity, 0);
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
        setItemQuantity(itemQuantity+1);
    }

    const subtractItem = () => {
        const newItems = [...items];
        newItems.find(item => item.id === currentItem.id).quantity -= 1;
        setItems(newItems);
        setCartItems(cartItems-1);
        setItemQuantity(itemQuantity-1);
    }

    return (
        <div className="checkout-item">
            <Image
                webp={currentItem.source}
                alt={currentItem.name}
                className="card-checkout"
            />
            <div>
                <div className="checkout-name">{currentItem.name}</div>
                <div className="checkout-price">${currentItem.price} / item</div>
            </div>
            <div className="modify-btns">
                <button onClick={subtractItem} className="modify-btn decrement">-</button>
                <div>
                    <input
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        className="input-item"
                        type="number"
                        name="items"
                        value={itemQuantity}
                        required
                    />
                </div>
                <button onClick={addItem} className="modify-btn increment">+</button>
            </div>
            <div className="checkout-price-total">
                ${(currentItem.price*currentItem.quantity).toFixed(2)}
            </div>
            <button onClick={deleteItem} className="delete-btn">x</button>
        </div>
    );
  };

export default CheckoutItem;