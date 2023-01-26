import React from "react";

// Components
import TodosList from "./TodosList.js";
import AddTodos from "./AddTodos.js";
import ClearTodos from "./ClearTodos.js";

const Home = () => {
  return (
    <>
      <TodosList />
      <AddTodos />
      <ClearTodos />
    </>
  );
};

export default Home;
