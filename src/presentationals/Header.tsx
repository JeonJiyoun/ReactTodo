import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";

interface Props {
  text: string;
  onClickEvent: (event: any) => void;
}

function Header({ text = "to do list", onClickEvent }: Props) {
  return <HeaderLayout onClick={onClickEvent}>{text}</HeaderLayout>;
}

export default Header;
