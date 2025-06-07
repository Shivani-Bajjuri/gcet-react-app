import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./logout.css";

export default function Logout() {
  const { user, setUser } = useContext(AppContext);
  const Navigate = useNavigate();
  useEffect(() => {
    setUser({});
    Navigate("/login");
  }, []);
  return <div className="logout-container">Logout</div>;
}