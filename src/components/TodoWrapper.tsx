import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";

export interface Istate {
  //todoList type
  todoList: {
    id: number;
    task: string;
  }[];
}

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState<Istate["todoList"]>([]);

  const addTask = (newTask: string): void => {
    if (newTask === "") {
      alert("Task input is empty!");
    } else {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        task: newTask,
      };
      setTodoList([...todoList, task]);
    }
  };

  const deleteTask = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTask={addTask} />
      {todoList.map((task) => {
        return <Task task={task} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default TodoWrapper;
