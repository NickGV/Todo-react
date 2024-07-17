import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos", JSON.stringify) || []));
  }, []);

  const addTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
    return;
  };

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.status === "completed";
    if (filter === "pending") return todo.status === "pending";
    if (filter === "low") return todo.importance === "low";
    if (filter === "medium") return todo.importance === "medium";
    if (filter === "urgent") return todo.importance === "urgent";
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        clearTodos,
        updateFilter,
        filter,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
