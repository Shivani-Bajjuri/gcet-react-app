import React, { useContext } from "react";
import { AppContext } from "../App";
import "./product.css";

export default function Product({ product }) {
  const { user } = useContext(AppContext);

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <h4>{product.price}$</h4>
      <button className="buy-button">Add to Cart</button>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}
