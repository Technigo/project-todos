import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos", //good to name same as variable
  initialState: {
    tasks: [],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map((task) => {
        if (task.id === action.payload) {
          //update isComplete property
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        } else {
          return task;
        }
      });

      store.tasks = updatedTasks;
    },
    removeTodo: (store, action) => {
      const decreasedTasks = store.tasks.filter(
        (task) => task.id !== action.payload
      );

      store.tasks = decreasedTasks;
    },
    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },
  },
});

export default todos;
