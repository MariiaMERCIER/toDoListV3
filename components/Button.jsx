"use client";

import { useState } from "react";

const Button = ({ task }) => {
  const [data, setData] = useState();

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
