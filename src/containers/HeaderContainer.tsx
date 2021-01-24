import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import Header from "../presentationals/Header";

function HeaderContainer() {
  const headerText: string = "Dyo's Todo List";
  const refreshPage = (event: any): void => location.reload();
  return (
    <HeaderLayout>
      <Header text={headerText} onClickEvent={refreshPage} />
    </HeaderLayout>
  );
}

export default HeaderContainer;
