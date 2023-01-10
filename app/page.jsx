import Button from "../components/Button";
import ToolBar from "../components/ToolBar";
import TodoProvider from "../context/TodoProvider";
import Task from "../components/Task";
import Header from "../components/Header";

async function getData() {
  const response = await fetch("http://localhost:3000/api/todos");
  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className=" min-h-screen bg-black text-white">
      <TodoProvider>
        <Header />
        <div>
          <h2 className="text-3xl ">Task to do</h2>
          {data.map((task, index) => {
            return (
              <div key={index}>
                <Task task={task} />
              </div>
            );
          })}
          <ToolBar />
          <Button />
        </div>
      </TodoProvider>
    </div>
  );
}
