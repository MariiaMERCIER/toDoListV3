import { ThemeProvider } from "../context/ThemeProvider";

import Header from "../components/Header";
import Toolbar from "../components/ToolBar";

async function getData() {
  const response = await fetch("http://localhost:3000/api/todos");
  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <ThemeProvider>
      <div className=" min-h-screen">
        <Header />
        <Toolbar data={data} />
      </div>
    </ThemeProvider>
  );
}
