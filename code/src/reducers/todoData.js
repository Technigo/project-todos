import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, titel: "Socks", task: "here we are", completed: false },
    { id: 2, titel: "T-shirt", task: "200", completed: true },
    { id: 3, titel: "Pants", task: "350", completed: false },
    { id: 4, titel: "Dress", task: "550", completed: false }
  ],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        titel: action.payload.titel,
        task: action.payload.task,
        completed: false
      };

      action.payload.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todos) => todos.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload.id);
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoData.actions;

export default todoData.reducer;
