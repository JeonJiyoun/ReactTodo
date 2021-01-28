// App.tsx
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppLayout, GlobalStyle } from "./layouts/AppLayout";
import { persistor, store } from "./modules";
import {
  HeaderContainer,
  TodoContainer,
  AddButtonContainer,
} from "./containers";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <AppLayout>
          <HeaderContainer />
          <TodoContainer />
          <AddButtonContainer />
        </AppLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
