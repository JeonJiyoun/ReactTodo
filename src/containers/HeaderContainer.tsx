import React from "react";

import Header from "../presentationals/Header";

function HeaderContainer() {
  const headerText: string = "Dyo's Todo List";
  const refreshPage = (): void => location.reload();
  return <Header text={headerText} onClickEvent={refreshPage} />;
}

export default HeaderContainer;
