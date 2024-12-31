import "./App.css";
import { NavBar } from "./component/Navbar";
import { Task } from "./pages/Tasks";

// import { DatePicker } from "antd";

function App() {
  return (
    <>
      <NavBar />
      <Task />
    </>
  );
}

export default App;
