import React from "react";
import { getTasks } from "../db/tasks";

export default function Tasks() {
  const tasks = getTasks();

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task.description} | {task.date} | {task.start} | {task.hours}h
          </li>
        ))}
      </ul>
    </div>
  );
}