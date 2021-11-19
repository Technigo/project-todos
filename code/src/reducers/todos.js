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
        creationDate: new Date(),
      };

      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
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
    setDueDate: (store, action) => {
      const dueDate = action.payload.date;
      const item = action.payload.item;
      const itemInStore = store.items.find((el) => el.id === item.id);
      itemInStore.dueDate = dueDate;
      console.log("action", action);
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
