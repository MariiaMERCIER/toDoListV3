"use client";

const Task = ({ task }) => {
  return (
    <div>
      <span>{task.isDone}</span>
      <p>{task.name}</p>
    </div>
  );
};

export default Task;
