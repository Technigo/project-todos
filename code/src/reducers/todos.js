import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: (store, action) => {
      console.log(action);

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // v1 mutability approach
      // store.items.push(data);

      //v2 immutability approach
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      // v1 mutability approach
      // store.items.forEach((item) => {
      //   if (item.id === action.payload) {
      //     item.isComplete = !item.isComplete;
      //   }
      // });

      //v2 immutability approach
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
      // v1 mutability approach (index from action.payload)
      // store.items.splice(action.payload, 1);

      //v2 immutability approach
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
  },
});
