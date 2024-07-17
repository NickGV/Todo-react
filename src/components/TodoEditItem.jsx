import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoEditItem = ({ todo, onCancel }) => {
  const { updateTodo } = useContext(TodoContext);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [deadline, setDeadline] = useState(todo.deadline);
  const [importance, setImportance] = useState(todo.importance);

  const handleSave = () => {
    updateTodo({
      ...todo,
      title,
      description,
      deadline,
      importance,
    });
    onCancel();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-2 flex flex-col justify-between">
      <div className="flex flex-col flex-grow gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-semibold w-full outline-none border-b focus:border-orange-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-gray-700 w-full outline-none border-b focus:border-orange-500"
          rows="3"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="text-gray-500 w-full outline-none border-b focus:border-orange-500"
        />
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
          className="text-gray-500 w-full outline-none p-1 "
        >
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <button
          onClick={handleSave}
          className="md:text-2xl hover:scale-110 hover:text-green-500 transition-all"
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button
          onClick={onCancel}
          className="md:text-2xl hover:scale-110 hover:text-red-500 transition-all"
        >
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
    </div>
  );
};
