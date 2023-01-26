import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../actions.js";

const AddTodos = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Add a TODO"
          value={todo}
          onChange={handleChange}
        />
        <button type="submit">ADD TODO</button>
      </form>
    </>
  );

  function submitTodo(e) {
    e.preventDefault();
    if (todo !== "") {
      dispatch(addTodos(todo));
    }
    setTodo("");
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }
};

export default AddTodos;
