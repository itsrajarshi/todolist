import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const clearTasks = () => {
    setTasks([]);
  };
  return (
    <div>
      <h2>My To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTasks}>Clear All</button>
    </div>
  );
}

export default TodoList;
// This component manages a simple to-do list where users can add tasks.
// It uses React's useState hook to manage the list of tasks and the input for new tasks.
// The addTask function adds a new task to the list, removeTask removes a specific task,
// and clearTasks clears all tasks from the list.
