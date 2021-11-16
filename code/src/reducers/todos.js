import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
  items: [],
  totalTasks: 0,
};

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

      //immutability approach
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      // console.log(action);
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

    removeToDo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
    clearTodo: () => {
      return initialState;
    },
  },
});

export default todos;
