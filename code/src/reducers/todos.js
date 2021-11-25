import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

// const initialState = {
//   today: new Date(),
//   task: [],
//   totalTask: 1,
// };

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },

  //THE LIBARY THAT YOU PICK STUFF FROME

  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      store.items = [...store.items, newTodo];
    },

    youAreAlldone: (store) => {
      const allDone = store.items.map((item) => {
        return {
          ...item,
          isComplete: true,
        };
      });
      store.items = allDone;
    },

    removeComplete: (store) => {
      const decreaseComplete = store.items.filter(
        (complete) => complete.isComplete === false
      );
      store.items = decreaseComplete;
    },

    resetAll: (store) => {
      const unDone = store.items.map((item) => {
        return {
          ...item,
          isComplete: false,
        };
      });
      store.items = unDone;
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
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
  },
});

export default todos;
