import { useContext, useEffect, useState } from "react";
import { NoteModal } from "../component/NoteModal";
import { DeleteFilled } from "@ant-design/icons";
import { customDate, ThemeContext } from "../ThemeContext";
import FilteredTasks from "../component/FilteredTasks";

export const Task = ({ tasks, setTasks }) => {
  const currentDate = customDate();
  const { filter } = useContext(ThemeContext);
  const [filteredTodos, setFilteredTodos] = useState([]);

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

    //find task by category
    if (filter === "All") {
      setFilteredTodos([]);
    } else {
      const find_task = tasks.filter((task) => task.category === filter);
      setFilteredTodos(find_task);
    }
  }, [filter, tasks]);

  return (
    <>
      <div>
        <h2 className="font-semibold text-2xl p-2 text-gray">{currentDate}</h2>
        <div className="Container flex flex-wrap">
          <div className="note-main flex gap-2 flex-col py-2">
            {filteredTodos.length > 0 ? (
              <FilteredTasks
                filteredTodos={filteredTodos}
                isTaskCompleted={isTaskCompleted}
                deleteTask={deleteTask}
              />
            ) : filteredTodos.length === 0 && filter !== "All" ? (
              <div className="text-center text-gray-500 text-3xl">
                No task in category
              </div>
            ) : tasks.length > 0 ? (
              tasks.map((t, index) => (
                <div
                  key={index}
                  className="Note-child bg-[#AEC289] p-4 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p
                        className={`text-xl font-light text-black ${
                          t.completed ? "complete-task" : "uncomplete-task"
                        }`}
                      >
                        {t.piority && (
                          <span
                            className={`dot mr-1 ${
                              t.piority === "High" ? "high" : "medium"
                            }`}
                            title={`Piority ${t.piority}`}
                          ></span>
                        )}
                        {t.task}
                      </p>
                      <p className="text-xs text-gray-600">
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
                        onChange={() => isTaskCompleted(t.ID)}
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
              <div className="text-center text-gray-500 text-3xl">
                No plan yet
              </div>
            )}

            <NoteModal tasks={tasks} setTasks={setTasks} />
          </div>

          <div className="Note-child mx-auto">
            <div className="progress-wrapper text-center">
              <p className="message">Your progress so far</p>
              <div className="progress-circle" id="progressbar">
                <div className="progress-inner bg-white">
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
