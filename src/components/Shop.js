import React, { useState } from "react";
import Image from 'react-image-webp';
import DoctorStrange from "../images/912_-_Doctor_Strange.webp";
import Spiderman from "../images/911_-_Spider-Man.webp";
import MJ from "../images/924_-_MJ.webp";
import Ned from "../images/925_-_Ned.webp";

const Shop = (props) => {
  const { cartItems, setCartItems } = props;
  const [items] = useState([
    {id: 1, name: "Doctor Strange", source: DoctorStrange, price: 19.55},
    {id: 2, name: "Spider Man", source: Spiderman, price: 18.95},
    {id: 3, name: "MJ", source: MJ, price: 17.85},
    {id: 4, name: "Ned", source: Ned, price: 16.25}
  ]);

  return (
    <div className="container">
      <h2>New Releases</h2>
      <div className="shop-items-container">
        {items.map(item => {
          return (
            <div key={item.id} className="card-container">
              <Image
                webp={item.source}
                alt={item.name}
                className="card-img"
              />
              <h4>{item.name}</h4>
              <div>${item.price}</div>
              <div>
                <button onClick={() => setCartItems(cartItems+1)}>Add to Cart</button>
              </div>
            </div>
          )})}
      </div>
    </div>
  );
};

export default Shop;