import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const searchSuggestions = [
  "Shirt",
  "Jeans",
  "Shoes",
  "Dress",
  "Watch",
  "Bag",
  "T-shirt",
  "Jacket",
  "Sunglasses",
  "Kurti",
  "Trousers",
  "Sweater",
];

export default function Header() {
  const location = useLocation();
  const isFrontPage = location.pathname === "/" || location.pathname === "/home";

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredSuggestions = searchSuggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header className="header-container">
      <div className="header-left">
        <nav className="nav-menu">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/login" className="nav-item">LOGIN</Link>
          <Link to="/register" className="nav-item">REGISTER</Link>
          <Link to="/cart" className="nav-item">CART</Link>
        </nav>
      </div>
      <div className="header-center">
        <div className="search-bar-dropdown">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            autoComplete="off"
          />
          {showDropdown && search && (
            <ul className="search-dropdown">
              {filteredSuggestions.length === 0 ? (
                <li className="dropdown-item">No results</li>
              ) : (
                filteredSuggestions.map((item, idx) => (
                  <li
                    key={idx}
                    className="dropdown-item"
                    onMouseDown={() => {
                      setSearch(item);
                      setShowDropdown(false);
                    }}
                  >
                    {item}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="header-right">
        {/* No icons on home page as per your request */}
      </div>
    </header>
  );
}