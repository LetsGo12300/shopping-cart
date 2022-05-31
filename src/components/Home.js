import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Best Buys - Home";
  });

  return (
    <div className="home">
      <div className="section-1">
        <div>Take a look inside . . .</div>
        <div className="home-title abril">
         THE GREAT SALE
        </div>
        <p>
          Don't miss out on this season's must have products. Featuring Funko POP! from Marvel Studios' Spider-man No Way Home.
        </p>
        <Link to="/shop"><button className="shop-btn">SHOP NOW</button></Link>
      </div>
    </div>
  );
};

export default Home;