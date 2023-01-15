import { ThemeProvider } from "../context/ThemeProvider";

import Toolbar from "../components/ToolBar";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`);
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <ThemeProvider>
        <Toolbar data={data} />
      </ThemeProvider>
    </main>
  );
}
