"use client";

import { useContext, useState } from "react";
import { AddContext } from "../app/page";
import Button from "./Button";

const ToolBar = () => {
  const { task, setTask } = useContext(AddContext);
  return (
    <>
      <input
        type="text"
        value={task}
        placeholder="Tape your task...."
        onChange={(event) => {
          event.preventDefault();
          setTask(event.target.value);
        }}
      />
      <Button task={task} />
    </>
  );
};

export default ToolBar;
