import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos", //same name as the varible
  initialState: {
    tasks: [
      { id: 1, description: "First taks", isComplete: false }, // things we want to store
      { id: 2, description: "Second task", isComplete: true },
      { id: 3, description: "Third task", isComplete: false },
      // remove later and leav items [] empty;
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
    removeTodo: (store, action) => {
      const deleteTasks = store.tasks.filter(
        (todo) => todo.id !== action.payload
      );

      store.tasks = deleteTasks;
    },
  },
});

export default todos;
