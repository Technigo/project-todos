import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
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
    removeItem: (store, action) => {
      const updatedItems = store.items.filter((todo) => {
        if (todo.id !== action.payload) {
          return {
            todo,
          };
        } else {
          return null;
        }
      });

      store.items = updatedItems;
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
  },
});

export default todos;
