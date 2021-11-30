import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { startDate, newTodo } = action.payload;
      state.items.push({
        id: uniqid(), //uniqid downloaded first with npm install uniqid
        text: newTodo,
        complete: false,
        date: new Date().getTime(),
        due: startDate,
      });
    },

    clearTodos: (state) => {
      state.items.length = 0;
    },

    removeThisTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.items.find((t) => t.id === id);
      state.items.splice(state.items.indexOf(todo), 1);
    },

    checkTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.items.find((t) => t.id === id);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});
