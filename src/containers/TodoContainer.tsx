import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import TodoList from "../presentationals/TodoList";

function TodoContainer() {
  const todoStore = useSelector((state: RootState) => state.Todo);

  return <TodoList todos={todoStore}></TodoList>;
}

export default TodoContainer;
