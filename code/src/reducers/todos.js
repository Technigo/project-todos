import { createSlice } from "@reduxjs/toolkit";
import uuidv4 from "uuid/v4";

export const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;

      if (text) {
        state.push({
          id: uuidv4(),
          text,
          isCompleted: false
        });
      }
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.find(t => t.id === id);

      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    }
  }
});
