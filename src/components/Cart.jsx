import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  // For demonstration, manage cart items locally
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddNowClick = () => {
    navigate("/");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">My Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="Empty Cart"
            className="cart-empty-image"
          />
          <h3 className="cart-empty-heading">Hey, it feels so light!</h3>
          <p className="cart-empty-message">There is nothing in your bag. Let's add some items.</p>
          <button className="cart-add-now-button" onClick={handleAddNowClick}>
            ADD NOW
          </button>
        </div>
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
