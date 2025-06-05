import React, { useContext } from "react";
import { AppContext } from "../App";
import "./product.css";

export default function Product({ product }) {
  const { user } = useContext(AppContext);

  return (
    <div className="product-box">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <div className="product-buttons">
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}
