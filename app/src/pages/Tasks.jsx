import React, { useState } from "react";
import { getTasks, deleteTask } from "../db/tasks";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState(getTasks());

  function handleDelete(idx) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(idx);
      setTasks(getTasks());
    }
  }

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task, idx) => (
          <div className="task-card" key={idx} style={{ position: "relative" }}>
            <div className="task-title">{task.description}</div>
            <div>Date: {task.date}</div>
            <div>Start: {task.start}</div>
            <div>Hours: {task.hours}h</div>
            <button
              className="delete-btn"
              title="Delete"
              onClick={() => handleDelete(idx)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="red"
                viewBox="0 0 24 24"
              >
                <path d="M3 6h18v2H3V6zm2 3h14v13H5V9zm3 2v9h2v-9H8zm4 0v9h2v-9h-2z" />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
}