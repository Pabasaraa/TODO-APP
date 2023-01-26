import { createStore } from "redux";

const initialState = {
  todos: ["Make the bed"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "CLEAR_TODOS":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
