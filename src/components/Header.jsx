import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home.jsx';
import './header.css';
export default function Header() {
  return (
    <div className="header-body">
      <h1 className="header-title">Cartsy</h1>
      <ul className="header-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>
    </div>
  );
}