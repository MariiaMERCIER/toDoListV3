import { ThemeProvider } from "../context/ThemeProvider";

import Toolbar from "../components/ToolBar";

async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL);
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
