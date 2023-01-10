"use client";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
library.add(faTrash);

const Task = ({ task }) => {
  const [done, setDone] = useState(false);

  const router = useRouter();

  const handleDelete = useCallback(async (id) => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log("catchDeleteTesk>>", error);
    }
  }, []);

  const handleChecked = useCallback(async (event, id) => {
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
  }, []);

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={(event) => {
          handleChecked(event, task._id);
        }}
      />
      <p>{task.data}</p>
      <p>{task.name}</p>
      <div
        onClick={() => {
          handleDelete(task._id);
        }}
      >
        <FontAwesomeIcon
          icon="fa-trash"
          style={{ fontSize: 15, color: "white" }}
        />
      </div>
    </div>
  );
};

export default Task;
