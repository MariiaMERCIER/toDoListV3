"use client";

import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

const Button = () => {
  // const [todo, setTodo] = useState();
  const [data, setData] = useState();
  const { todo, setTodo } = useTodoContext();

  const handleAddTask = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/api/todos", {
        body: todo,
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
