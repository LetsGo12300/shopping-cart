import React, { useContext, useEffect } from "react";
import Image from 'react-image-webp';
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

const Shop = () => {
  const { items } = useContext(ShopContext);

  useEffect(() => {
    document.title = "Best Buys - Browse Shop";
  });

  return (
    <div className="container">
      <div className="abril title">NEW RELEASES</div>
      <div className="shop-items-container">
        {items.map(item => {
          return (
            <Link to={`/shop/${item.id}`} key={item.id} className="shop-item-link">
              <div className="card-container-1">
                <Image
                  webp={item.source}
                  alt={item.name}
                  className="card-img"
                />
                <h4>{item.name}</h4>
                <div>${item.price}</div>
              </div>
            </Link>
            
          )})}
      </div>

    </div>
  );
};

export default Shop;