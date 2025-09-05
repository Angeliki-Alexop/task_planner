import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header-nav">
      <Link to="/" className="header-link">Home</Link>
      <Link to="/add" className="header-link">Add Task</Link>
      <Link to="/tasks" className="header-link">Tasks</Link>
    </nav>
  );
}