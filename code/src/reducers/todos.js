import { createSlice } from "@reduxjs/toolkit";

import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // // v1 Mutability approach
      // store.items.push(data);

      // v2 Immutability approach
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      // v1 Mutability approach
      // store.items.forEach((item) => {
      // 	if (item.id === action.payload) {
      // 		item.isComplete = !item.isComplete;
      // 	}
      // });

      // v2 Immutability approach
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            // id: item.id,
            // text: item.text,
            // isComplete: item.isComplete,
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });

      store.items = updatedItems;
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter((item) => item.id !== action.payload);

      store.items = decreasedItems;
    },
    deleteCompletedTasks: (store) => {
      const decreasedCompletedItems = store.items.filter((item) => !item.isComplete);

      store.items = decreasedCompletedItems;
    },
    changeFilter: (store, action) => {
      store.filter = action.payload;
    },
  },
});

export default todos;

export const selectFilteredTodos = (store) => {
  const filter = store.todos.filter;
  const todos = store.todos.items;
  if (filter === "all") {
    return todos;
  }
  if (filter === "active") {
    return todos.filter((todo) => {
      return !todo.isComplete;
    });
  }
  if (filter === "completed") {
    return todos.filter((todo) => {
      return todo.isComplete;
    });
  }
};
