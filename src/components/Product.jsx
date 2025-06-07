import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./product.css";

export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;
  const [showPopup, setShowPopup] = useState(false);

  // Load products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/product/all`);
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div>
      <h3>Welcome {user?.name || "Guest"}!</h3>
      <div className="App-Product-Row">
        {products?.map((p) => (
          <div key={p._id} className="product-box">
            <h3>{p.name}</h3>
            <h4>₹{p.price}</h4>
            <button onClick={() => addToCart(p._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {showPopup && <div className="popup">Product added to cart!</div>}
    </div>
  );
}