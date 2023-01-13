import { ThemeProvider } from "../context/ThemeProvider";

import Toolbar from "../components/ToolBar";

async function getData() {
  const response = await fetch("http://localhost:3000/api/todos");
  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <ThemeProvider>
      <Toolbar data={data} />
    </ThemeProvider>
  );
}
