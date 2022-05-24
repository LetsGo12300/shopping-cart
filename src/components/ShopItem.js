import React from "react";
import Image from 'react-image-webp';
import { useParams } from 'react-router-dom';

const ShopItem = (props) => {
    const { items } = props;
    const { itemId } = useParams();
    // find item
    const item = items.find(item => item.id === parseInt(itemId));

    return (
        <div className="container">
            <div className="card-container">
                <Image
                  webp={item.source}
                  alt={item.name}
                  className="card-img"
                />
                <h4>{item.name}</h4>
                <div>${item.price}</div>
              </div>
        </div>
    );
};

export default ShopItem;