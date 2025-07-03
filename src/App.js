import "./App.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import TodoList from "./components/todolist";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My To-Do List App</h1>
      <TodoList />
    </div>
  );
}

export default App;
