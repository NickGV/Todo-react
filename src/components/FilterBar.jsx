import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const FilterBar = () => {
  const { filter, updateFilter } = useContext(TodoContext);

  return (
    <section className="md:w-1/6 md:h-full pt-2  md:bg-slate-700 md:text-white">
      <h2 className="hidden md:block text-2xl font-semibold mb-3 pt-2 pl-4">
        Filters
      </h2>
      <ul className="flex justify-around md:flex-col md:gap-0 gap-2">
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none px-4 py-2 cursor-pointer ${
            filter === "all" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("all")}
        >
          All
        </li>
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none px-4 py-2 cursor-pointer ${
            filter === "completed" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("completed")}
        >
          Completed
        </li>
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none px-4 py-2 cursor-pointer ${
            filter === "pending" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("pending")}
        >
          Pending
        </li>
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none  px-4 py-2 cursor-pointer hidden md:block ${
            filter === "low" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("low")}
        >
          low-priority
        </li>
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none  px-4 py-2 cursor-pointer hidden md:block ${
            filter === "medium" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("medium")}
        >
          medium-priority
        </li>
        <li
          className={`hover:text-white hover:bg-orange-500 hover:rounded-md md:hover:rounded-none  px-4 py-2 cursor-pointer hidden md:block ${
            filter === "urgent" ? "bg-orange-500 text-white rounded-md md:rounded-none" : ""
          }`}
          onClick={() => updateFilter("urgent")}
        >
          Urgent
        </li>
      </ul>
    </section>
  );
};
