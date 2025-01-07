import { useContext, useEffect, useState } from "react";
import { NoteModal } from "../component/NoteModal";
import { DeleteFilled } from "@ant-design/icons";
import { ThemeContext } from "../ThemeContext";
// import { Typography } from "antd";
export const Task = ({ tasks, setTasks, currentDate, setCurrentDate }) => {
  // const { Paragraph } = Typography;
  const { Theme } = useContext(ThemeContext);

  function deleteTask(taskID: number) {
    const delTask = tasks.filter((todo) => todo.ID !== taskID);
    setTasks(delTask);
    localStorage.setItem("todolist", JSON.stringify(delTask));
  }

  const isTaskCompleted = (taskID) => {
    const updatedTasks = tasks.map((task) =>
      task.ID === taskID ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    localStorage.setItem("todolist", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;

    const totalTasks = tasks.length;
    const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

    const progressBar = document.getElementById("progressbar");
    if (progressBar) {
      progressBar.style.background = `conic-gradient(limegreen ${progress}%, pink 0%)`;
      progressBar.querySelector(".percentage").textContent = `${Math.round(
        progress
      )}%`;
    }
  }, [tasks]);

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
                      <p
                        className={`text-xl font-light text-black 
                          ${
                            t.completed === true
                              ? "complete-task"
                              : "uncomplete-task"
                          }`}
                      >
                        <span
                          className={`dot mr-1 ${
                            t.piority === "High" ? "high" : "medium"
                          }`}
                          title={`Piority ${t.piority}`}
                        ></span>
                        {t.task}
                      </p>
                      <p className="text-xs text-gray-400">
                        {t.date}{" "}
                        <span className="text-xs text-gray-600 font-medium pl-1">
                          {t.category}
                        </span>
                      </p>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id={`complete${t.ID}`}
                        onChange={() => {
                          isTaskCompleted(t.ID);
                        }}
                        checked={t.completed}
                      />
                      <DeleteFilled
                        className="cursor-pointer text-black"
                        onClick={() => deleteTask(t.ID)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // {}
              <div className="text-center text-gray-500 text-3xl ">
                No plan yet
              </div>
            )}

            <NoteModal
              tasks={tasks}
              setTasks={setTasks}
              currentDate={currentDate}
            />
          </div>

          {/* <Paragraph editable>hello editable text</Paragraph> */}
          <div className="Note-child mx-auto">
            <div className="progress-wrapper text-center">
              <p className="message">Great start! Keep it going! 🚀</p>
              <div className="progress-circle" id="progressbar">
                <div
                  className="progress-inner"
                  style={{
                    backgroundColor: Theme == "light" ? "white" : "#111827",
                  }}
                >
                  <p className="percentage">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
