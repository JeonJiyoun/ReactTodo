import React from "react";

interface Props {
  text: string;
  onClickEvent: (event: any) => void;
}

function Header({ text = "to do list", onClickEvent }: Props) {
  return <div onClick={onClickEvent}>{text}</div>;
}

export default Header;
