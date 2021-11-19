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

    toggleAllTodo: (store, action) => {
      const allDone = store.items.map((item) => {
        if (item.isComplete === false) {
          const allDoneItems = {
            ...item,
            isComplete: !item.isComplete,
          };
          return allDoneItems;
        } else {
          return item;
        }
      });

      store.items = allDone;
    },

    removeAll: (store) => {
      store.items = [];
    },

    // deleteAll: (store, action) => {
    //   const deleteAllItems = store.items((item) => item.id !== action.payload);

    //   store.items = deleteAllItems;
    // },

    // completeAll: (store) => {
    //   const completeAllItems = store.items;

    //   store.items = completeAllItems;
    // },
  },
});

export default todos;
