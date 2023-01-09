"use client";
import { useRouter } from "next/navigation";
import { useTodoContext } from "../context/TodoProvider";

const Button = () => {
  const { todo, setTodo } = useTodoContext();
  const router = useRouter();

  const handleAddTask = async (event) => {
    event.preventDefault();
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
  };

  return <button onClick={handleAddTask}>Add task</button>;
};

export default Button;
