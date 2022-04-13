import { createSlice } from "@reduxjs/toolkit";

const initialState = { lists: [] }

const todos = createSlice({
  name: "todo",
  initialState,
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

    addTodo: (state, action) => {
      state.lists = [...state.lists, action.payload];
    },

    deleteTodo: (state, action) => {
      const updatedTodo = state.lists.filter((todo) => todo.id !== action.payload);
      state.lists = updatedTodo;
    },

    clearTodos: () => {
      return initialState;
    }
  }
});

export default todos;