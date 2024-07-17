import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoEditItem } from "./TodoEditItem";

export const TodoItem = ({ todo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTodo, updateTodo } = useContext(TodoContext);

  const importanceClasses = {
    none: "text-gray-500",
    low: "text-green-500",
    medium: "text-blue-800",
    urgent: "text-red-500",
  };

  const handleToggleComplete = () => {
    const updatedStatus = todo.status === "completed" ? "pending" : "completed";
    updateTodo({ ...todo, status: updatedStatus });
  };

  const handleRemove = () => {
    deleteTodo(todo.id);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 10) return description;
    return words.slice(0, 10).join(" ") + "...";
  };

  const editTodo = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <TodoEditItem todo={todo} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="flex-grow md:flex-grow-0 md:w-3/4 mr-4">
        <h3 className={`text-xl font-semibold ${todo.status === "completed" ? "line-through text-gray-600" : "text-gray-800"}`}>
          {todo.title}
        </h3>
        <div className="mt-2">
          <p className={`text-gray-700 ${todo.status === "completed" ? "line-through" : ""}`}>
            {isExpanded ? todo.description : getShortDescription(todo.description)}
            {todo.description.split(" ").length > 10 && (
              <button onClick={toggleDescription} className="text-blue-500 ml-2">
                {isExpanded ? "Show less" : "...more"}
              </button>
            )}
          </p>
        </div>
        <div className="mt-2 flex items-center">
          <p className="text-gray-500">Deadline: {todo.deadline}</p>
          <span className={`ml-4 text-sm ${importanceClasses[todo.importance]}`}>
            Importance: {todo.importance}
          </span>
        </div>
      </div>
      <div className="flex items-center mt-2 md:mt-0 md:ml-4">
        <button
          className="text-gray-600 hover:text-blue-500 focus:outline-none hover:scale-105"
          onClick={editTodo}
        >
          <i className="fas fa-edit fa-lg"></i>
        </button>
        <button
          onClick={handleToggleComplete}
          className={`ml-2 text-gray-600 hover:text-green-500 focus:outline-none hover:scale-105 ${todo.status === "completed" ? "line-through" : ""}`}
        >
          {todo.status === "completed" ? (
            <i className="fas fa-check-circle fa-lg"></i>
          ) : (
            <i className="far fa-check-circle fa-lg text-green-500"></i>
          )}
        </button>
        <button
          onClick={handleRemove}
          className="ml-2 text-gray-600 hover:text-red-500 focus:outline-none hover:scale-105"
        >
          <i className="fas fa-trash-alt fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

