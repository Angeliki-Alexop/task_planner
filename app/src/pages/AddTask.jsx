import React, { useState } from "react";
import { addTask } from "../db/tasks";

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
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input value={desc} onChange={e => setDesc(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="time" value={start} onChange={e => setStart(e.target.value)} required />
        </div>
        <div>
          <label>Hours Needed:</label>
          <input type="number" step="0.1" value={hours} onChange={e => setHours(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}