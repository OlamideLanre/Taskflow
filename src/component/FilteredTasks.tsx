import { DeleteFilled } from "@ant-design/icons";

const FilteredTasks = ({ filteredTodos, isTaskCompleted, deleteTask }) => {
  return (
    // <div className="Container flex flex-wrap">
    <div className="">
      {filteredTodos.map((t, index) => (
        <div key={index} className="Note-child bg-[#AEC289] p-4 rounded-md">
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
      ))}
    </div>
    // </div>
  );
};

export default FilteredTasks;
