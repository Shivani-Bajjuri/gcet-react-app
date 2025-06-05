import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const apiUrl = import.meta.env.VITE_API_URL + "/users/register";
      const res = await axios.post(apiUrl, user);

      setUsers([...users, user]);
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      <div className="register-form">
        <p>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <hr />
      <div className="login-link">
        Already a user? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
