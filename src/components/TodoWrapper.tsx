import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";
import EditTaskForm from "./EditTaskForm";

export interface Istate {
  //todoList type
  todoList: {
    id: number;
    task: string;
    completed: boolean;
    isEditing: boolean;
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
        isEditing: false,
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

  const editTask = (id: number): void => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (id: number, task: string): void => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTask={addTask} />
      {todoList.map((task) => {
        if (task.isEditing === true) {
          return <EditTaskForm originalTodo={task} updateTask={updateTask} />;
        } else {
          return (
            <Task
              task={task}
              deleteTask={deleteTask}
              markCompleted={markCompleted}
              editTask={editTask}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoWrapper;
