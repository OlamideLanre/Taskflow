import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./component/Navbar";
import { Task } from "./pages/Tasks";
import { ThemeContext } from "./ThemeContext";

function App() {
  type TASK = {
    readonly ID: string;
    task: string;
    piority: string;
    category: string;
    completed: boolean;
    date: string;
  }[];
  const [filter, setFilter] = useState<string>("All");
  const [Theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState<TASK>([]);
  const [category, setCategory] = useState<string[]>([]);

  const changeTheme = () => {
    const updateTheme = Theme === "light" ? "dark" : "light";
    setTheme(updateTheme);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todolist") || "[]");
    setTasks(storedTasks);
  }, []);
  return (
    <>
      <ThemeContext.Provider
        value={{ Theme, changeTheme, category, setCategory, filter, setFilter }}
      >
        <NavBar />
        <Task tasks={tasks} setTasks={setTasks} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
