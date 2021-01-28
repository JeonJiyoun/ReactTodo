// App.tsx
import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppLayout, GlobalStyle } from "./layouts/AppLayout";
import rootReducer from "./modules";
import {
  HeaderContainer,
  TodoContainer,
  AddButtonContainer,
} from "./containers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppLayout>
        <HeaderContainer />
        <TodoContainer />
        <AddButtonContainer />
      </AppLayout>
    </Provider>
  );
};

export default App;
