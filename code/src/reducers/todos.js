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
    removeTodo: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    completeAllTodos: (store, action) => {
      const itemsAllCompleted = store.items.map((task) => {
        return {
          ...task,
          isComplete: true,
        };
      });
      store.items = itemsAllCompleted;
    },

    cleanAllTodos: (store, action) => {
      const itemsUnclear = store.items.map((task) => {
        return {
          ...task,
          isComplete: false,
        };
      });
      store.items = itemsUnclear;
    },
  },
});

export default todos;
