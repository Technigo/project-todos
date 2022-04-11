import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      console.log("action", action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },

    deleteTodo: (store, action) => {
      store.items.splice(action.payload, 1);
    },
  },
});

export default todos;
