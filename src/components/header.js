import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>React To-Do List</h1>
      <p>Get things done, one task at a time</p>
    </header>
  );
};

export default Header;
