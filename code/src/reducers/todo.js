import { createSlice } from "@reduxjs/toolkit";

import uniqid from "uniqid";

const todo = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        completed: false,
      };

      store.items = [...store.items, newTodo];
    },
    changeStatus: (store, action) => {
      const newState = store.items.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      store.items = newState;
    },
    removeSingleTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload);
    },
    clearAll: (store, action) => {
      store.items = [];
    },
  },
});

export default todo;
