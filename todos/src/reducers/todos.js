import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todo",
  initialState: {
    lists: []
  },
  reducers: {
    toggleTodo: (state, action) => {
      const updatedTodos = state.lists.map((todo) => {
        if (todo.id === action.payload) {
          const updatedTodo = {
            ...todo,
            isComplete: !todo.isComplete
          }

          return updatedTodo;
        } else {
          return todo;
        }
      });

      state.lists = updatedTodos
    },
    addToDo: (state, action) => {
      state.lists = [...state.lists, action.payload];
    }
  }
});

export default todos;