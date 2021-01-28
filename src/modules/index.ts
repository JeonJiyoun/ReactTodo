import { combineReducers, createStore } from "redux";
import Todo from "./todo";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  Todo,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["Todo"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore<any, any, any, any>(persistedReducer);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export default persistedReducer;
