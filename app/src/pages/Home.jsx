import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getTasks } from "../db/tasks";
import "./Home.css";

export default function Home() {
  const tasks = getTasks();

  // Collect all dates with tasks
  const taskDates = tasks.map(task => task.date);

  // Function to add a class to days with tasks
  function tileClassName({ date, view }) {
    if (view === "month") {
      const day = date.toISOString().slice(0, 10);
      if (taskDates.includes(day)) {
        return "task-day";
      }
    }
    return null;
  }

  return (
    <div className="home-container">
      <h1>Welcome to Task Planner!</h1>
      <p>Create and view your tasks.</p>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
}