import React, { useState, useEffect } from "react";
// import AddTaskForm from "./components/AddTaskForm";
// import TaskList from "./components/TaskList";
import { MdDarkMode, MdSunny } from "react-icons/md";

// import { useLocalStorage } from "./hooks/useLocalStorage.jsx";

import "./index.css";

import AppRouter from "./AppRouter.jsx";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
