const TASKS_KEY = "tasks";

export function getTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function clearTasks() {
  localStorage.removeItem(TASKS_KEY);
}