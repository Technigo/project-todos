import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  //object that takes 3 properties (every slice have name, initalstate, reducers)
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    //each property is one method to update the store. Will always looks like this, a name and an anonymous function. Properties in function will always be store and in some cases action
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // v1 Mutability approach
      // store.items.push(data);

      // v2 Immutability approach. Use spread
      store.items = [...store.items, newTodo];
    },

    toggleTodo: (store, action) => {
      // v1 Mutability approach
      // store.items.forEach((item) => {
      //   if (item.id === action.payload) {
      //     item.isComplete = !item.isComplete;
      //   }
      // });

      // v2 Immutability approach. Use spread
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
      // v1 Mutability approach index in action.payload
      // store.items.splice(action.payload, 1);

      // v2 Immutability approach
      const decreadedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreadedItems;
    },
  },
});

export default todos;
