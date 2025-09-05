import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import AddTask from "./pages/AddTask.jsx";
import Tasks from "./pages/Tasks.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}