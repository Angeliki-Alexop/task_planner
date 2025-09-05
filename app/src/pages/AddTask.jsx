import React, { useState } from "react";
import { addTask } from "../db/tasks";
import "./AddTask.css";

export default function AddTask() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [hours, setHours] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask({
      description: desc,
      date,
      start,
      hours: parseFloat(hours),
    });
    setDesc("");
    setDate("");
    setStart("");
    setHours("");
    alert("Task added!");
  }

  return (
    <div className="add-task-container">
      <h2 className="add-task-title">Add Task</h2>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          value={desc}
          onChange={e => setDesc(e.target.value)}
          required
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <label>Start Time:</label>
        <input
          type="time"
          value={start}
          onChange={e => setStart(e.target.value)}
          required
        />
        <label>Hours Needed:</label>
        <input
          type="number"
          step="0.1"
          value={hours}
          onChange={e => setHours(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}