import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  task: {
    id: number;
    task: string;
    completed: boolean;
  };
  deleteTask: (id: number) => void;
  markCompleted: (id: number) => void;
}

const Task: React.FC<Iprops> = ({ task, deleteTask, markCompleted }) => {
  return (
    <div className="Todo">
      <div className={`${task.completed === true ? "completed" : ""}`}>
        {task.task}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="fa-icon"
          onClick={() => markCompleted(task.id)}
        />
        <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" />
        <FontAwesomeIcon
          icon={faTrash}
          className="fa-icon"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
