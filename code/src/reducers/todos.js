import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: []
  },
  reducers: {
    completeTodos: (store, action) => {
      store.items.forEach(items => {
        if (items.id === action.payload) {
          items.complete = !items.complete;
        }
      });
    },
    //Adding todos
    addTodos: (store, action) => {
      store.items.push(action.payload);
    },
    //remove todos  
    removeTodos: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    toggleTodos: (store, action) => {
      store.items.forEach((item) => {
          if (item.id === action.payload) {
          item.isDone = !item.isDone;
          }
      });
  },
    //completed todos
  },
});

export default todos;
