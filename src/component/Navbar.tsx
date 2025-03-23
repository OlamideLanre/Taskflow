import { BulbFilled, PlusOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
export const NavBar = () => {
  const { category, setCategory, setFilter } = useContext(ThemeContext);
  const [categoryname, setCategoryName] = useState<string>();

  const AddCategory = () => {
    if (categoryname) {
      let add = [...category, categoryname];
      setCategory(add);
      localStorage.setItem("taskflow-category", JSON.stringify(add));
    } else {
      console.log("no category yet");
    }
    setCategoryName("");
    document.getElementById("my_modal_4").close();
  };

  useEffect(() => {
    let retrievedCategory = JSON.parse(
      localStorage.getItem("taskflow-category") || "[]"
    );
    setCategory(retrievedCategory);
  }, []);

  return (
    <>
      <nav className="containern mx-auto my-0">
        <div className="main bg-black flex text-lime-200 justify-between py-2 px-6 rounded-md items-center">
          <div className="flex gap-9">
            <select
              name=""
              id=""
              className=" bg-black text-[#AEC289] px-4 py-1 rounded-sm font-semibold text-xl"
              onClick={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              {category.map((ct: string, index: number) => (
                <option key={index} value={ct}>
                  {ct}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-white text-black rounded-2xl py-1 px-7 text-sm"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              NEW CATEGORY <PlusOutlined />
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box  p-4 ">
                <form method="dialog">
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
            {/* <BulbFilled
              className="cursor-pointer"
              onClick={() => {
                changeTheme();
              }}
            /> */}
          </div>
        </div>
      </nav>
    </>
  );
};
