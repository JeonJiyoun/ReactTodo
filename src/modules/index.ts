import { combineReducers } from "redux";
import Todo from "./todo";

const rootReducer = combineReducers({
  Todo,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
