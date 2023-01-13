"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useThemeContext from "../context/ThemeProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

const Task = ({ task }) => {
  const [done, setDone] = useState(false);
  const { setTheme, theme } = useThemeContext();

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log("catchDeleteTesk>>", error);
    }
  };

  const handleChecked = async (event, id) => {
    event.preventDefault();

    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
      });
      setDone(true);
      router.refresh();
    } catch (error) {
      console.log("catchUpdateTesk>>", error.reponse);
    }
  };

  return (
    <div className="flex gap-x-5 ">
      <input
        className="checked:bg-green-500"
        type="checkbox"
        checked={task.isDone}
        onChange={(event) => {
          handleChecked(event, task._id);
        }}
      />
      <p className={`text-base  ${theme ? "text-black" : "text-white"}`}>
        {task.data}
      </p>
      <p className={`text-base ${theme ? "text-black" : "text-white"}`}>
        {task.name}
      </p>
      <div
        onClick={() => {
          handleDelete(task._id);
        }}
      >
        <FontAwesomeIcon
          icon="fa-trash"
          className={`text-base ${theme ? "text-black" : "text-white"}`}
        />
      </div>
    </div>
  );
};

export default Task;
