/**initial state */
export interface TodoItemDataType {
  id: string;
  text: string;
  date: string;
  done: boolean;
}
const initialState: TodoItemDataType[] = [];

/**Action Type */
const ADD: string = "todo/ADD";
const TOGGLE: string = "todo/TOGGLE";
const UPDATE: string = "todo/UPDATE";
const REMOVE: string = "todo/REMOVE";

/**Action Creator */
let today = new Date();
export const addTodo = (text: string = "") => ({
  type: ADD,
  newTodo: {
    id: Math.random().toString(36).substr(2, 11),
    text: text,
    date: today.toLocaleDateString(),
    done: false,
  },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE,
  data: {
    id,
  },
});

export const updateTodo = (id: string, text: string) => ({
  type: UPDATE,
  data: {
    id,
    text,
  },
});

export const removeTodo = (id: string) => ({
  type: REMOVE,
  data: { id },
});

type TodoActionTypes = ReturnType<typeof addTodo> &
  ReturnType<typeof updateTodo> &
  ReturnType<typeof toggleTodo> &
  ReturnType<typeof removeTodo>;

/**Reducer */

export default function todoFunction(
  state = initialState,
  action: TodoActionTypes
): TodoItemDataType[] {
  switch (action.type) {
    case ADD:
      return [...state, action.newTodo];
    case UPDATE:
      return state.map((todo) =>
        todo.id === action.data.id ? { ...todo, text: action.data.text } : todo
      );
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.data.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.data.id);
    default:
      return state;
  }
}
