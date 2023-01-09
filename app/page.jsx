import styles from "./page.module.css";
import Button from "../components/Button";
import ToolBar from "../components/ToolBar";
import TodoProvider from "../context/TodoProvider";
import Task from "../components/Task";

async function getData() {
  const response = await fetch("http://localhost:3000/api/todos");
  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <TodoProvider>
      {data.map((task, index) => {
        return <Task key={index} task={task} />;
      })}

      <ToolBar />
      <Button />
    </TodoProvider>
  );
}
