import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/add" style={{ marginRight: "10px" }}>Add Task</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}