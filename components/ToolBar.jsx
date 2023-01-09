"use client";

import { useTodoContext } from "../context/TodoProvider";

import Button from "./Button";

const ToolBar = () => {
  const { todo, setTodo } = useTodoContext();
  return (
    <>
      <input
        type="text"
        value={todo}
        placeholder="Tape your task...."
        onChange={(event) => {
          event.preventDefault();
          setTodo(event.target.value);
        }}
      />
    </>
  );
};

export default ToolBar;
