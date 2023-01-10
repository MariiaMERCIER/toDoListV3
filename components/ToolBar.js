"use client";

import { useCallback, useMemo } from "react";
import { useTodoContext } from "../context/TodoProvider";

const ToolBar = () => {
  const { todo, setTodo } = useTodoContext();

  return (
    <>
      <input
        type="text"
        value={todo || ""}
        placeholder="Tape your task...."
        onChange={useCallback((event) => {
          event.preventDefault();
          setTodo(event.target.value);
        }, [])}
      />
    </>
  );
};

export default ToolBar;
