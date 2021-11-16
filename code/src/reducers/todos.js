import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      //   console.log(action);
      //   const data = action.payload;

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      //v1 Mutability approach: (immer kommer ändra denna kod till immutable code tho so v2 bättre tror jag?)
      //   store.items.push(data);

      //v2 Immutability:
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      //v1 Mutability approach:
      //   store.items.forEach((item) => {
      //     item.isComplete = !item.isComplete;
      //   });
      //v2 Immutability:
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
      //v1 mutability approach
      store.items.splice(action.payload, 1);

      // v2 immutability approach
    },
  },
});

export default todos;
