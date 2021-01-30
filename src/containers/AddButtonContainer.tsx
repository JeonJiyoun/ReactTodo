import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todo";
import AddButton from "../presentationals/AddButton";

function AddButtonContainer() {
  const dipatch = useDispatch();
  const add = () => {
    dipatch(addTodo());
  };
  return <AddButton onClickEvent={add}></AddButton>;
}

export default AddButtonContainer;
