export function addTodos(todo) {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
}

export function clearTodos() {
  return {
    type: "CLEAR_TODOS",
  };
}
