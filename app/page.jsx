import { ThemeProvider } from "../context/ThemeProvider";

import Toolbar from "../components/ToolBar";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <ThemeProvider>
      <main>
        <Toolbar data={data} />
      </main>{" "}
    </ThemeProvider>
  );
}
