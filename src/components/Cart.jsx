import React, { useState } from "react";
import "./cart.css";

export default function Cart() {
  // For demonstration, manage cart items locally
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Looks like your shopping bag's on a diet.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
