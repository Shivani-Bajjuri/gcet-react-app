import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "./App";
import axios from "axios";
import "./components/home.css";

export default function Home() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Welcome {user.name}!</h3>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
