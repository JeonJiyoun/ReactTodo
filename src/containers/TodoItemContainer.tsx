import React from "react";
import { useDispatch } from "react-redux";
import TodoItemLayout from "../layouts/TodoItemLayout";
import {
  removeTodo,
  TodoItemDataType,
  toggleTodo,
  updateTodo,
} from "../modules/todo";
import TodoItem from "../presentationals/TodoItem";

interface Props {
  todo: TodoItemDataType;
}

function TodoItemContainer({ todo }: Props) {
  const dispatch = useDispatch();
  console.log(todo);

  const toggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const remove = (id: number) => {
    dispatch(removeTodo(id));
  };
  const update = (id: number, text: string) => {
    dispatch(updateTodo(id, text));
  };

  return (
    <TodoItem todo={todo} toggle={toggle} remove={remove} update={update} />
  );
}

export default TodoItemContainer;
