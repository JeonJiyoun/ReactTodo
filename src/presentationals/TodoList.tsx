import React from "react";
import TodoItemContainer from "../containers/TodoItemContainer";
import TodoListLayout from "../layouts/TodoListLayout";
import { TodoItemDataType } from "../modules/todo";

interface Props {
  todos: TodoItemDataType[];
}

function TodoList({ todos }: Props) {
  const todoComponents = todos.map((todo, key) => {
    return <TodoItemContainer key={key} todo={todo}></TodoItemContainer>;
  });
  console.log(todos, todoComponents);
  return <TodoListLayout>{todoComponents}</TodoListLayout>;
}

export default TodoList;
