import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import useForm from "../hooks/useForm";

export const TodoForm = ({ onClose }) => {
  const { addTodo } = useContext(TodoContext);

  const initialState = {
    title: "",
    description: "",
    deadline: "",
    importance: "",
    status: "pending",
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.title) {
      errors.title = "El título es requerido";
    }

    if (!formData.description) {
      errors.description = "La descripción es requerida";
    }

    if (!formData.deadline) {
      errors.deadline = "La fecha límite es requerida";
    }

    if (!formData.importance) {
      errors.importance = "La importancia es requerida";
    }

    return errors;
  };

  const onSubmit = (formData) => {
    addTodo({
      ...formData,
      id: Date.now(),
    });
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialState,
    validateForm,
    onSubmit
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-bg bg-opacity-80">
      <div className="max-w-md w-full bg-slate-900 shadow-sm shadow-white rounded-lg p-6 relative">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-3 relative">
          <h2 className="text-2xl font-bold mb-4 text-white">Add Todo</h2>
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>

            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-400 "
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="what are you going to do?"
            ></textarea>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="date"
              name="deadline"
              id="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.deadline ? "border-red-500" : ""
              }`}
              placeholder=" "
              required
            />
            <label
              htmlFor="deadline"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Deadline
            </label>

            {errors.deadline && (
              <span className="text-red-500 text-sm">{errors.deadline}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <select
              name="importance"
              id="importance"
              value={formData.importance}
              onChange={handleChange}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none bg-slate-900 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.title ? "border-red-500" : ""
              }`}
              required
            >
              <option value="none" className="text-gray-800">
                None
              </option>
              <option value="low" className="text-gray-800">
                Low
              </option>
              <option value="medium" className="text-gray-800">
                Medium
              </option>
              <option value="urgent" className="text-gray-800">
                Urgent
              </option>
            </select>
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Importance
            </label>

            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>

          <button
            type="submit"
            className="text-white-btn-text bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 border "
          >
            Submit
          </button>
        </form>
        <button
          className="absolute top-0.5 right-0 m-4 text-gray-600 hover:text-orange-500"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};
