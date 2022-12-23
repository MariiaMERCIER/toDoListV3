"use client";

import { useState } from "react";
import Button from "./Button";

const ToolBar = () => {
  const [task, setTask] = useState();
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
