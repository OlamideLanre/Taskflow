import { PlusCircleFilled } from "@ant-design/icons";
import { useState } from "react";
export const NoteModal = ({ tasks, setTasks, currentDate }) => {
  const [Task, setTask] = useState<string>("");
  const [Piority, setPiority] = useState("");

  const generatedUniqueID = () => {
    return Math.random().toString(16).substring(2, 6);
  };

  const curateTodo = () => {
    let Category = document.getElementById("task-category").value;
    if (Task.trim() === "") {
      console.log("task cannot be empty");
      return;
    }
    const newTask = {
      ID: generatedUniqueID(),
      task: Task,
      piority: Piority,
      category: Category,
      completed: false,
      date: currentDate,
    };
    console.log(newTask.date);

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("todolist", JSON.stringify(updatedTasks));
    console.log(updatedTasks);

    setTask("");
    document.getElementById("my_modal_3").close();
  };

  function ckChange(item) {
    let checkboxs = document.getElementsByName(item.name);
    let isChecked = document.getElementById(item.id);
    setPiority(isChecked.value);

    if (isChecked.checked) {
      for (let i = 0; i < checkboxs.length; i++) {
        if (!checkboxs[i].checked) {
          checkboxs[i].disabled = true;
        } else {
          checkboxs[i].disabled = false;
        }
      }
    } else {
      for (let j = 0; j < checkboxs.length; j++) {
        checkboxs[j].disabled = false;
      }
    }
  }
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <PlusCircleFilled
        className="text-4xl p-1 cursor-pointer"
        title="add new note"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      />
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal rounded-lg">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div
            className=" mx-auto p-10 flex flex-col"
            // style={{ width: "28rem" }}
          >
            <input
              type="text"
              className="bg-white pr-24 pl-5 py-2 border-black border-b outline-none"
              placeholder="What's your goal today?"
              value={Task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              required
            />
            <h3 className="font-bold text-lg">Set piority</h3>
            <div className="piority flex items-center gap-2">
              <input
                type="checkbox"
                id="high"
                name="checkbox"
                onChange={(e) => {
                  ckChange(e.target);
                }}
                value="High"
              />
              High
              <span className="dot high"></span>
              <br />
              <input
                type="checkbox"
                id="medium"
                name="checkbox"
                onChange={(e) => {
                  ckChange(e.target);
                }}
                value="Medium"
              />
              Medium
              <span className="dot medium"></span>
            </div>

            <div className="py-2 category">
              <h3 className="font-bold text-lg">
                Select a category for this task
              </h3>
              <div className="btnDiv">
                <select
                  id="task-category"
                  className="bg-lime-100 text-black px-4 py-2 rounded-sm"
                >
                  <option value="All">All(default)</option>
                  {/* dummy category */}
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
            </div>
            <button
              className="bg-black text-lime-100 font-medium py-1 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                curateTodo();
              }}
            >
              Add task
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
