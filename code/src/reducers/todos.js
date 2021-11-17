import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        timePosted: moment().format("DD MMMM YYYY, HH:mm"),
      };
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updatedItem = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });
      store.items = updatedItem;
    },

    clearAllTasks: (store) => {
      const clearAll = store.items.map((task) => {
        if (task.isComplete) {
          return { ...task };
        } else
          return {
            ...task,
            isComplete: !task.isComplete,
          };
      });
      store.items = clearAll;
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
  },
});
