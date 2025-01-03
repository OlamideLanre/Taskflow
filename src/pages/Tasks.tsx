import { useContext, useEffect, useState } from "react";
import { NoteModal } from "../component/NoteModal";
import { DatabaseFilled, DeleteFilled } from "@ant-design/icons";
import { ThemeContext } from "../ThemeContext";
// import { Typography } from "antd";
export const Task = ({ tasks, setTasks }) => {
  // const { Paragraph } = Typography;
  const { Theme } = useContext(ThemeContext);
  const [currentDate, setCurrentDate] = useState(getDate());
  function getDate() {
    const todaysDate = new Date();
    const month = todaysDate.toLocaleString("dafult", { month: "long" });
    const dateOfWeek = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    return `${month} ${dateOfWeek},${year}`;
  }
  return (
    <>
      <div>
        <h2 className=" font-semibold text-2xl p-2 text-gray ">
          {currentDate}
        </h2>
        <div className="Container flex flex-wrap">
          <div className="note-main flex gap-2 flex-col">
            {tasks.length > 0 ? (
              tasks.map((t, index: number) => (
                <div
                  key={index}
                  className="Note-child bg-lime-200 p-4 rounded-md "
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-light text-black">
                        <span
                          className={`dot mr-1 ${
                            t.piority === "High" ? "high" : "medium"
                          }`}
                          title={`Piority ${t.piority}`}
                        ></span>
                        {t.task}
                      </p>
                      <p className="text-xs text-gray-400">
                        {currentDate}{" "}
                        <span className="text-xs text-gray-600 font-medium pl-1">
                          {t.category}
                        </span>
                      </p>
                    </div>
                    <div>
                      <input type="checkbox" className="cursor-pointer" />
                      <DeleteFilled className="cursor-pointer text-black" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // {}
              <div className="text-center text-gray-500 text-3xl ">
                No plan yet
                {/* <DatabaseFilled /> */}
              </div>
            )}

            <NoteModal tasks={tasks} setTasks={setTasks} />
          </div>

          {/* <Paragraph editable>hello editable text</Paragraph> */}
          <div className="Note-child mx-auto">
            <div className="progress-wrapper text-center">
              <p className="message">Great start! Keep it going! 🚀</p>
              <div className="progress-circle">
                <div
                  className="progress-inner"
                  style={{
                    backgroundColor: Theme == "light" ? "white" : "#111827",
                  }}
                >
                  <p className="percentage">5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
