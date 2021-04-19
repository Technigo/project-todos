import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, description: "First task", isComplete: false },
      { id: 2, description: "Second task", isComplete: false },
      { id: 3, description: "Third task", isComplete: false },
    ],
    updatedTodos: [],
  },
  reducers: {
    toggleComplete: (state, action) => {
      const { id } = action.payload;

      state.updatedTodos = state.items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
          return item;
        } else {
          return item;
        }
      });
      state.items = state.updatedTodos;
    },
    createNewTodo: (state, action) => {
      const { task } = action.payload;
      state.items.push({
        id: state.items.length + 1, 
        description: task, 
        isComplete: false }) 
    },
  },
});
