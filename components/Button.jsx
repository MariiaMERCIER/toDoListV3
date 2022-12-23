"use client";
import { AddContext } from "../app/page";
import { useContext, useState } from "react";

const Button = ({ task }) => {
  const { task, setData } = useContext(AddContext);

  const handleAddTask = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/api/task", {
        body: task,
        method: "POST",
      });

      setData(response.json);
    } catch (error) {
      console.log("catch toolbar>>", error);
    }
  };

  return <button onClick={handleAddTask}>Add task</button>;
};

export default Button;
