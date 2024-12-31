import { PlusOutlined } from "@ant-design/icons";
export const NavBar = () => {
  return (
    <>
      <nav className="container">
        <div className="main flex bg-black text-lime-200 justify-between py-2 px-6 rounded-md items-center">
          <div className="flex gap-9">
            <a href="" className="links">
              All
            </a>
            <a href="" className="links">
              Completed
            </a>
          </div>

          <div className="text-black">
            <button className="bg-white  rounded-2xl px-8 py-1">
              NEW CATEGORY <PlusOutlined />
            </button>
            {/* <Icon type="plus" color="green" /> */}
          </div>
        </div>
      </nav>
    </>
  );
};
