import React from "react";
// import
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import TodoList from "../presentationals/TodoList";

function TodoContainer() {
  const todoStore = useSelector((state: RootState) => state.Todo);
  console.log(todoStore);

  return <TodoList todos={todoStore}></TodoList>;
}

export default TodoContainer;
