"use client";
import { useRouter } from "next/navigation";
import { useTodoContext } from "../context/TodoProvider";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useCallback, useMemo } from "react";

const Button = () => {
  const { todo, setTodo } = useTodoContext();

  const router = useRouter();

  const handleAddTask = useCallback(async (event) => {
    event.preventDefault();
    if (todo) {
      try {
        const response = await fetch("http://localhost:3000/api/todos", {
          method: "POST",
          body: JSON.stringify({ name: todo }),
        });
        router.refresh();
        setTodo("");
      } catch (error) {
        console.log("catch toolbar>>", error);
      }
    } else {
      toast.error("No task to add!");
    }
  }, []);

  return (
    <>
      <button onClick={handleAddTask}>Add task</button>
      <ToastContainer />
    </>
  );
};

export default Button;
