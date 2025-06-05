import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "./App";
import axios from "axios";
import "./components/home.css";

export default function Home() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://gcet-node-app-three.vercel.app/product/all");
      setProducts(res.data);
    } catch (error) {
      setError("Failed to fetch products");
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Welcome {user?.name || "Guest"}!</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="product-container">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-box">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
