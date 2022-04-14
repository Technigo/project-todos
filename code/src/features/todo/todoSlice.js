import { createSlice } from "@reduxjs/toolkit";

const initialState = { todo: [] };
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: () => initialState,
    onAdd: (state, action) => {
      state.todo.unshift(action.payload);
    },
    toggleComplete: (state, action) => {
      state.todo.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
  },
});

export const { reset, onAdd, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
