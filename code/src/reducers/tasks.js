import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    addTask: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      store.items = [...store.items, newTodo];
    },
    toggleTask: (store, action) => {
      const updatedItems = store.items.map((item) => {
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

      store.items = updatedItems;
    },
    deleteTask: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },

    completeAllTodos: (store, action) => {
      const completeAll = store.items.map((todo) => {
        return {
          ...todo,
          isComplete: true,
        };
      });
      store.items = completeAll;
    },

    emptyList: (store) => {
      store.items = [];
    },

    changeFilter: (store, action) => {
      store.filter = action.payload;
    },
  },
});

export default tasks;

export const selectFilteredTodos = (store) => {
  const filter = store.tasks.filter;
  const tasks = store.tasks.items;
  if (filter === "all") {
    return tasks;
  }
  if (filter === "to do") {
    return tasks.filter((tasks) => {
      return !tasks.isComplete;
    });
  }
  if (filter === "done") {
    return tasks.filter((tasks) => {
      return tasks.isComplete;
    });
  }
};
