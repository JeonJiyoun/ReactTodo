import React from "react";
import AddButtonLayout from "../layouts/AddButtonLayout";
import { MdAdd } from "react-icons/md";

interface Props {
  onClickEvent: () => void;
}

function AddButton({ onClickEvent }: Props) {
  return (
    <AddButtonLayout onClick={onClickEvent}>
      <MdAdd />
    </AddButtonLayout>
  );
}

export default AddButton;
