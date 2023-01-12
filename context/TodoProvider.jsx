// "use client";

// import { createContext, useContext, useReducer } from "react";

// const todoReducer = (state, action) => {
//   const stateCopy = structuredClone(state);
//   const { tasks } = stateCopy;

//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_TASK":
//       stateCopy.tasks = [...tasks, payload];
//       stateCopy.numberOfUndoneTasks = stateCopy.numberOfUndoneTasks + 1;
//       return stateCopy;
//     case "REMOVE_TASK":
//       stateCopy.tasks = tasks.filter((task) => task.name !== payload.name);
//       if (payload.isDone) {
//         stateCopy.numberOfDoneTasks = stateCopy.numberOfDoneTasks - 1;
//       } else {
//         stateCopy.numberOfUndoneTasks = stateCopy.numberOfUndoneTasks - 1;
//       }
//       return stateCopy;
//     case "TOGGLE TASK":
//       stateCopy.tasks[payload.index].isDone;
//       if (payload.isDone) {
//         stateCopy.numberOfDoneTasks = stateCopy.numberOfDoneTasks - 1;
//         stateCopy.numberOfUndoneTasks = stateCopy.numberOfUndoneTasks + 1;
//       } else {
//         stateCopy.numberOfDoneTasks = stateCopy.numberOfDoneTasks + 1;
//         stateCopy.numberOfUndoneTasks = stateCopy.numberOfUndoneTasks - 1;
//       }
//       return stateCopy;

//     case "TOGGLE_SORT_TASKS":
//       stateCopy.sortTasks = !state.sortTasks;
//       return stateCopy;
//   }
// };

// const initialState = {
//   tasks: [],
//   numberOfDoneTasks: 0,
//   numberOfUndoneTasks: 0,
//   sortTasks: false,
// };

// export const TodoContext = createContext();

// export default function TodoProvider({ children }) {
//   // const [todo, dispatch] = useReducer(todoReducer, initialState);

//   return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
// }

// export const useTodoContext = () => {
//   return useContext(TodoContext);
// };
