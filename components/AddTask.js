"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import useThemeContext from "../context/ThemeProvider";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddTask = () => {
  const { theme } = useThemeContext();

  const todo = useRef(null);
  const router = useRouter();

  const handleAddTask = async (event) => {
    event.preventDefault();
    todo.current.focus();

    if (todo.current.value) {
      try {
        const response = await fetch("http://localhost:3000/api/todos", {
          method: "POST",
          body: JSON.stringify({ name: todo.current.value }),
        });

        router.refresh();
      } catch (error) {
        console.log("catch toolbar>>", error.message);
      }
    } else {
      toast.error("No task to add!");
    }
  };

  return (
    <>
      <input
        className="w-96 focus:border-purple-900 mb-4 mt-4"
        type="text"
        ref={todo}
        placeholder="Tape your task...."
      />
      <button
        className="text-2xl bg-purple-900 text-white w-52 h-12 rounded-lg mb-2"
        onClick={handleAddTask}
      >
        Add task
      </button>

      <ToastContainer />
    </>
  );
};

export default AddTask;
