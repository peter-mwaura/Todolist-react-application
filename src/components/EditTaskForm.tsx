import React, { useState } from "react";

interface EditTaskFormProps {
  originalTodo: {
    id: number;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  updateTask: (id: number, task: string) => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  originalTodo,
  updateTask,
}) => {
  const [updatedTask, setupdatedTask] = useState<string>(
    `${originalTodo.task}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setupdatedTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateTask(originalTodo.id, updatedTask);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedTask}
        className="todo-input"
        placeholder="Update Task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTaskForm;
