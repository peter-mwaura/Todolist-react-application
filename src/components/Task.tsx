import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  task: {
    id: number;
    task: string;
  };
  deleteTask: (id: number) => void;
}

const Task: React.FC<Iprops> = ({ task, deleteTask }) => {
  return (
    <div className="Todo">
      {task.task}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};

export default Task;
