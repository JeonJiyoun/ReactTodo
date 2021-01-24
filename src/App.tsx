// App.tsx
import * as React from "react";
import { AppLayout, GlobalStyle } from "./layouts/AppLayout";
import { HeaderContainer, TodoContainer, AddButtonContainer} from "./containers";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
          <HeaderContainer/>
          <TodoContainer/>
          <AddButtonContainer/>
      </AppLayout>
    </>
  );
};

export default App;
