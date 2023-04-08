import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";

export interface Istate {
  //todoList type
  todoList: {
    id: number;
    task: string;
    completed: boolean;
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
        completed: false,
      };
      setTodoList([...todoList, task]);
    }
  };

  const deleteTask = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const markCompleted = (id: number): void => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTask={addTask} />
      {todoList.map((task) => {
        return (
          <Task
            task={task}
            deleteTask={deleteTask}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
