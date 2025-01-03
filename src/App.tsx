import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./component/Navbar";
import { Task } from "./pages/Tasks";
import { ThemeContext } from "./ThemeContext";

// import { DatePicker } from "antd";

function App() {
  type TASK = {
    readonly ID: string;
    task: string;
    piority: string;
    category: string;
  }[];

  const [Theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState<TASK>([]);

  const changeTheme = () => {
    const updateTheme = Theme === "light" ? "dark" : "light";
    setTheme(updateTheme);
  };

  // Update body background and text color based on the theme
  useEffect(() => {
    document.body.style.backgroundColor =
      Theme === "light" ? "white" : "#111827";
    document.body.style.color = Theme === "light" ? "#111827" : "white";
    document.body.style.transition = "background-color 300ms, color 300ms";
  }, [Theme]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todolist") || "[]");
    setTasks(storedTasks);
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ Theme, changeTheme }}>
        <NavBar />
        <Task tasks={tasks} setTasks={setTasks} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
