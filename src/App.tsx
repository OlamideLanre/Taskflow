import { useState } from "react";
import "./App.css";
import { NavBar } from "./component/Navbar";
import { DeleteFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { NoteModal } from "./component/NoteModal";
// import { DatePicker } from "antd";

function App() {
  const { Paragraph } = Typography;
  const [currentDate, setCurrentDate] = useState(getDate());
  function getDate() {
    const todaysDate = new Date();
    // const month = todaysDate.getMonth() + 1;
    const month = todaysDate.toLocaleString("dafult", { month: "long" });
    const dateOfWeek = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    return `${month} ${dateOfWeek},${year}`;
  }
  return (
    <>
      <NavBar />
      <h2 className="text-black font-semibold text-2xl p-2">{currentDate}</h2>
      <div className="Container flex border border-black">
        <div className="note-main flex gap-2 flex-col border border-red-700">
          <div className="Note-child bg-lime-200 p-4 rounded-md ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-light">Bake chrismas cookies</p>
                <p className="text-xs text-gray-400">{currentDate}</p>
              </div>
              <div>
                <input type="checkbox" className="cursor-pointer" />
                <DeleteFilled className="cursor-pointer" />
              </div>
            </div>
          </div>
          <NoteModal />
        </div>

        {/* <Paragraph editable>hello editable text</Paragraph> */}
        <div className="Note-child mx-auto">
          <div className="progress-wrapper text-center">
            <p className="message">Great start! Keep it going! 🚀</p>
            <div className="progress-circle">
              <div className="progress-inner">
                <p className="percentage">5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
