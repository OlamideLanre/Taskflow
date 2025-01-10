import { BulbFilled, PlusOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
export const NavBar = () => {
  const { Theme, changeTheme } = useContext(ThemeContext);
  const [categoryname, setCategoryName] = useState<string>();
  const [category, setCategory] = useState<string[]>([]);
  const AddCategory = () => {
    if (categoryname) {
      let add = [...category, categoryname];
      setCategory(add);
      localStorage.setItem("taskflow-category", JSON.stringify(add));
    } else {
      console.log("no category yet");
    }
    setCategoryName("");
  };

  useEffect(() => {
    let retrievedCategory = JSON.parse(
      localStorage.getItem("taskflow-category") || "[]"
    );
    setCategory(retrievedCategory);
  }, []);
  return (
    <>
      <nav className="container">
        <div
          className="main bg-black flex text-lime-200 justify-between py-2 px-6 rounded-md items-center"
          style={{
            backgroundColor: Theme == "light" ? "#d9f99d" : "white",
            color: Theme == "light" ? "#111827" : "black",
          }}
        >
          <div className="flex gap-9">
            <select
              name=""
              id=""
              className={`${
                Theme === "light" ? "bg-lime-200" : "bg-white"
              } text-black px-4 py-1 rounded-sm font-semibold text-xl`}
            >
              <option value="all">All</option>
              {category.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {/* <a href="" className="links">
              All
            </a> */}
            {/* <a href="" className="links">
              Completed
            </a> */}
          </div>

          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-white text-black rounded-2xl px-8 py-1 mr-2"
              onClick={() => document.getElementById("my_modal_4").showModal()}
              style={{
                backgroundColor: Theme == "light" ? "white" : "#111827",
                color: Theme == "light" ? "#111827" : "white",
              }}
            >
              NEW CATEGORY <PlusOutlined />
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box p-4">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex  flex-col">
                  <h3 className="font-bold text-lg text-center">
                    New Category
                  </h3>
                  <input
                    type="text"
                    placeholder="name"
                    className="bg-white pr-24 pl-5 py-2 border-black border-b outline-none"
                    value={categoryname}
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                  />
                  <br />
                  <button
                    className="bg-black text-lime-100 font-medium py-1 rounded-lg"
                    onClick={AddCategory}
                  >
                    Done
                  </button>
                </div>
              </div>
            </dialog>
            {/* <button className="bg-white text-black rounded-2xl px-8 py-1 mr-2">
              NEW CATEGORY <PlusOutlined />
            </button> */}
            <BulbFilled
              className="cursor-pointer"
              onClick={() => {
                changeTheme();
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
