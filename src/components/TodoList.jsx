import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export const TodoList = ({ handleShowForm }) => {
  const { todos, filteredTodos } = useContext(TodoContext);

  return (
    <section className="pt-4 pr-4 w-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold ml-2">My todo list</h2>
        <button
          className="hidden md:block text-white-btn-text focus:ring-4 focus:outline-none font-semibold rounded-lg text-white text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 border"
          onClick={handleShowForm}
        >
          Add Task
        </button>
      </div>
      <div>
        {filteredTodos &&
          filteredTodos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
      </div>
    </section>
  );
};
