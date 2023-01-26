import React from "react";
import { useSelector } from "react-redux";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {todos.map((todo) => {
        return <h1>{todo}</h1>;
      })}
    </>
  );
};

export default TodosList;
