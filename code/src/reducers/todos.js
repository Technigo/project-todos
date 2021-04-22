import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      { id: 1, description: "First Task", isComplete: false },
      { id: 2, description: "Second Task", isComplete: true },
      { id: 3, description: "Third Task", isComplete: false },
    ],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      });

      store.tasks = updatedTasks;
    },

    // ADD TASK
    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },

    // REMOVE TASK
    removeTask: (store, action) => {
      const decreasedTasks = store.tasks.filter(
        (task) => task.id !== action.payload
      );
      store.tasks = decreasedTasks;
    },

    // REMOVE COMPLETED TASKS
    removeCompletedTasks: (store) => {
      const removeCompletedTasks = store.tasks.filter(
        (task) => task.isComplete !== true
      );
      store.tasks = removeCompletedTasks;
    },
  },
});

export default todos;
