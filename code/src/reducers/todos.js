import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos", //same name as the varible
  initialState: {
    tasks: [],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map((task) => {
        if (task.id === action.payload) {
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
      const deleteTasks = store.tasks.filter(
        (task) => task.id !== action.payload
      );

      store.tasks = deleteTasks;
    },

    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },
  },
});

export default todos;
