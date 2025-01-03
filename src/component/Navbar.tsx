import { BulbFilled, PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export const NavBar = () => {
  const { Theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className="container">
        <div
          className="main bg-black flex text-lime-200 justify-between py-2 px-6 rounded-md items-center"
          style={{
            backgroundColor: Theme == "light" ? "#d9f99d" : "black",
            color: Theme == "light" ? "#111827" : "#d9f99d",
          }}
        >
          <div className="flex gap-9">
            <a href="" className="links">
              All
            </a>
            <a href="" className="links">
              Completed
            </a>
          </div>

          <div>
            <button className="bg-white text-black rounded-2xl px-8 py-1 mr-2">
              NEW CATEGORY <PlusOutlined />
            </button>
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
