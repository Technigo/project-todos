import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: (store, action) => {
      console.log(action);

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      store.items = [...store.items, newTodo];
    },

    toggleTodo: (store, action) => {
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

    detleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },

    toggleAllTodo: (store) => {
      const allDone = store.items.map((item) => {
        if (item.isComplete === false) {
          const updatedTodo = {
            ...item,
            isComplete: true,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });

      store.items = allDone;
    },

    toggleAllTodoBack: (store) => {
      const allUnDone = store.items.map((item) => {
        const updatedTodo = {
          ...item,
          isComplete: false,
        };
        return updatedTodo;
      });

      store.items = allUnDone;
    },

    removeAll: (store) => {
      store.items = [];
    },
  },
});

export default todos;
