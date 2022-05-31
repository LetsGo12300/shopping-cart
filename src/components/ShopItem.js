import React, { useState, useContext, useEffect } from "react";
import Image from 'react-image-webp';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';

const ShopItem = () => {
    const { items, setItems, setCartItems} = useContext(ShopContext);
    const { itemId } = useParams();
    const [buyCount, setBuyCount] = useState(0);

    // find item
    const item = items.find(item => item.id === parseInt(itemId));

    useEffect(() => {
        document.title = "Best Buys - Browse Item";
    });

    const handleInputChange = (e) => {
        if (e.target.value){
            const value = parseInt(e.target.value);
            setBuyCount(value);
        } else {
            setBuyCount('');
        }
    };  

    const addCount = () => {
        setBuyCount(buyCount+1);
    }; 

    const subtractCount = () => {
        if (buyCount !== 0)
            setBuyCount(buyCount-1);
    }; 

    const addToCart = () => {
        if (buyCount) {
            const newItems = [...items];
            newItems.find(item => item.id === parseInt(itemId)).quantity += buyCount;
            setItems(newItems);
            setCartItems(getCartItemsSum());
        }
    };

    const getCartItemsSum = () => {
        return items.map(item => item.quantity)
        .reduce((total, quantity) => total + quantity, 0);
    };
    
    return (
        <div className="shop-item-container">
            <div className="card-container-2">
                <Image
                    webp={item.source}
                    alt={item.name}
                    className="card-img-2"
                />
                <div className="right-card-container-2">
                    <div>
                        <div className="item-title abril">{item.name}</div>
                        <div className="item-price">${item.price} / item</div>
                    </div>
                    <div className="shop-btns">
                        <div className="modify-btns">
                            <button onClick={subtractCount} className="modify-btn decrement">-</button>
                            <div>
                                <input
                                    onChange={handleInputChange}
                                    className="input-item"
                                    type="number"
                                    name="items"
                                    value={buyCount}
                                    required
                                />
                            </div>
                            <button onClick={addCount} className="modify-btn increment">+</button>
                        </div>
                        <div>
                            <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ShopItem;