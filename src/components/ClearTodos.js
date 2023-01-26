import React from "react";
import { useDispatch } from "react-redux";

function ClearTodos() {
  const disptach = useDispatch();
  return (
    <div>
      <button onClick={() => disptach({ type: "CLEAR_TODOS" })}>
        Clear TODOS
      </button>
    </div>
  );
}

export default ClearTodos;
