import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/ToDoList.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          text: taskInput,
          completed: false,
        },
      ]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
          className={styles.taskInput}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} className={styles.addButton}>
          Add Task
        </button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`${styles.taskItem} ${
              task.completed ? styles.completed : ""
            }`}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className={styles.taskText}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div className={styles.summary}>
          {tasks.filter((t) => !t.completed).length} tasks remaining
        </div>
      )}
    </div>
  );
};

export default ToDoList;
