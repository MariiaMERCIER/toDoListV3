"use client";

import AddTask from "../components/AddTask";
import Task from "../components/Task";
import BtnSort from "./BtnSort";

import useThemeContext from "../context/ThemeProvider";
import { useState } from "react";

const Toolbar = ({ data }) => {
  const { setTheme, theme } = useThemeContext();
  const [sort, setSort] = useState(false);

  const dataFilterDone = data.filter((done) => done.isDone === true);
  const dataFilterUndone = data.filter((undone) => undone.isDone === false);
  return (
    <div
      className={`flex flex-col font-comic my-0
      mx-auto pl-5 w-3/5 ${theme ? "bg-white" : "bg-black"}`}
    >
      <div>
        <p className="mb-4">
          You have{" "}
          <span className="font-bold text-orange-400">{data.length}</span> tasks
          in your TODO list {"   "}
          <span className="font-bold text-orange-400">
            {dataFilterDone.length}
          </span>{" "}
          of them are<span className="font-bold text-orange-400"> done </span>
          and{" "}
          <span className="font-bold text-orange-400">
            {dataFilterUndone.length}
          </span>{" "}
          is <span className="font-bold text-orange-400">to do</span>.
        </p>
      </div>
      {sort ? (
        <div className="gap-x-3">
          <h2
            className={`text-3xl  mb-4 ${theme ? "text-black" : "text-white"}`}
          >
            Task to do
          </h2>
          {dataFilterUndone.map((task, index) => {
            return (
              <div key={index}>
                <Task task={task} />
              </div>
            );
          })}
          <h2
            className={`text-3xl mb-4 ${theme ? "text-black" : "text-white"}`}
          >
            Task Done
          </h2>
          {dataFilterDone.map((task, index) => {
            return (
              <div key={index}>
                <Task task={task} />
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <div className="gap-x-3">
          <h2
            className={`text-3xl mb-4 ${theme ? "text-black" : "text-white"}`}
          >
            All tasks
          </h2>
          {data.map((task, index) => {
            return (
              <div key={index}>
                <Task task={task} />
              </div>
            );
          })}{" "}
        </div>
      )}
      <AddTask />
      <BtnSort sort={sort} setSort={setSort} />
    </div>
  );
};
export default Toolbar;
