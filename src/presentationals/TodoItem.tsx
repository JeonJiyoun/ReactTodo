import React from "react";
import { useState } from "react";
import { MdDelete, MdDone, MdModeEdit } from "react-icons/md";
import TodoItemLayout, {
  CheckCircle,
  EditIcon,
  Remove,
  TodoText,
} from "../layouts/TodoItemLayout";
import { Input } from "../layouts/TodoItemLayout";

import { TodoItemDataType } from "../modules/todo";

interface Props {
  todo: TodoItemDataType;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number, text: string) => void;
}

function TodoItem({ todo, toggle, remove, update }: Props) {
  const [editMode, setEditMode] = useState(todo.text === "" ? true : false);
  const [text, setText] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  const onClickUpdate = () => {
    if (text === "") {
      alert("할 일을 입력하세요");
      return;
    }
    update(todo.id, text);
    setEditMode(false);
  };
  console.log(text);

  return editMode ? (
    <TodoItemLayout>
      <Input value={text} onChange={onChangeInput} />
      <CheckCircle done={true} onClick={onClickUpdate}>
        {<MdDone />}
      </CheckCircle>
    </TodoItemLayout>
  ) : (
    <TodoItemLayout>
      <CheckCircle done={todo.done} onClick={() => toggle(todo.id)}>
        {todo.done && <MdDone />}
      </CheckCircle>
      <TodoText done={todo.done}>{todo.text}</TodoText>
      <EditIcon onClick={() => setEditMode(!editMode)}>
        <MdModeEdit />
      </EditIcon>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemLayout>
  );

  // {editMode ?  : (
  //     <TodoItemLayout>
  //     <CheckCircle done={todo.done}>{todo.done && <MdDone />}</CheckCircle>
  //     <TodoText>{todo.Text}</TodoText>
  //   )}

  //   {editMode ? (
  //     <EditIcon onClick={setEditMode(!editMode)}>
  //       <MdModeEdit />
  //     </EditIcon>
  //   ) : (
  //     <CheckCircle done={todo.done}>{todo.done && <MdDone />}</CheckCircle>
  //   )}
  //   <Input value={text} onChange={onChangeInput} />
  // </TodoItemLayout>
}

export default TodoItem;
