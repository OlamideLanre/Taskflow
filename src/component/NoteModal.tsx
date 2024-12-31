import { PlusCircleFilled } from "@ant-design/icons";
export const NoteModal = () => {
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
              placeholder="What your goal today?"
            />
            <h3 className="font-bold text-lg">Set piority</h3>
            <div className="piority flex items-center gap-2">
              <input type="checkbox" /> High
              <span className="dot high"></span>
              <br />
              <input type="checkbox" /> Medium
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
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
                {/* <button
                  className="bg-black text-white font-light px-14 py-1 rounded-2xl"
                  title="default category"
                >
                  All
                </button>
                <button
                  className="bg-black text-white font-light px-14 py-1 rounded-2xl ml-3"
                  title="default category"
                >
                  All
                </button> */}
              </div>
            </div>
            <button className="bg-black text-lime-100 font-medium py-1 rounded-lg">
              Add task
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
