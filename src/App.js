import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ToDoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
