import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const data = action.payload;

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // v1 mutability not good in redux without immer
      // store.items.push(data);

      // v2 Immuteability
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      // v1 mutability - does not work, dont see why
      // store.items.forEach((item) => {
      //   if (item.id === action.payload) {
      //     item.isComplete = !item.isComplete;
      //   }
      // });

      // v2 immutablility
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
      // v1 mutability
      // store.items.splice(action.payload, 1);

      // v2 immutability
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
  },
});

export default todos;
