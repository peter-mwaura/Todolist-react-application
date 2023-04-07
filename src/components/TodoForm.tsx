import React, { useState } from "react";

interface TodoFormProps {
  addTask: (addTask: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const [newTask, setnewTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setnewTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(newTask);
    setnewTask("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
