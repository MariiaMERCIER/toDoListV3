import styles from "./page.module.css";
import Button from "../components/Button";
import ToolBar from "../components/ToolBar";
import TodoProvider from "../context/TodoProvider";

async function getData() {
  const response = await fetch("http://localhost:3000/api/todos");
  return response.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <TodoProvider>
      {data.map((todo, index) => {
        return <p key={index}>{todo.name}</p>;
      })}

      <ToolBar />
      <Button />
    </TodoProvider>
  );
}
