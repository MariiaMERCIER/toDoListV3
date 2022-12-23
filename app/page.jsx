import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ToolBar from "../components/ToolBar";
import { useState, createContext } from "react";
import task from "../pages/api/task";

export const AddContext = createContext();

export default function Home() {
  return (
    <AddContext.Provider
      value={{ task: task, setTask: setTask, data: data, setData: setData }}
    >
      <ToolBar />
      <p>Hello world</p>
    </AddContext.Provider>
  );
}
