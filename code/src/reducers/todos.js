import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, description: "task 1", isComplete: false },
      { id: 2, description: "task 2", isComplete: true },
      { id: 3, description: "task 3", isComplete: false },
    ],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      });

      store.items = updatedItems;
    },
  },
});

export default todos;
