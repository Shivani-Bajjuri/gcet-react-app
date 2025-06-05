import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const url = `${API}/users/register`;
      await axios.post(url, user);
      Navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
      <hr />
      {users &&
        users.map((value) => (
          <li key={value.email}>
            {value.name}-{value.email}-{value.password}
          </li>
        ))}
    </div>
  );
}
