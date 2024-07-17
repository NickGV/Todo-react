import { FilterBar } from "./FilterBar";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

export const MainSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="flex flex-col md:flex-row gap-4 h-91">
      <FilterBar />
      <TodoList handleShowForm={handleShowForm} />
      {showForm && <TodoForm onClose={handleShowForm} />}
      <footer className="mt-auto">
        <button
          className="md:hidden text-white-btn-text focus:ring-4 focus:outline-none rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white font-semibold dark:bg-orange-500 dark:hover:bg-orange-600 border"
          onClick={handleShowForm}
        >
          Add Task
        </button>
      </footer>
    </main>
  );
};
