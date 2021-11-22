import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

// AN object with 3 properties = name, initialState and reducers
const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    // each property is one method to update the store.
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // Immutability approach. Using spread
      store.items = [...store.items, newTodo];
    },

    toggleTodo: (store, action) => {
      // Immutability approach. Useing spread
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

    toggleIsComplete: (store, action) => {
      const todo = store.items.filter((item) => item.id === action.payload);
      todo.isComplete = !todo.isComplete;
      store.items.sort((a, b) => a.isComplete > b.isComplete && (1 || -1));
    },

    // Complete all todos
    completeAllTodos: (store) => {
      const completeAll = store.items.map((todo) => {
        return {
          ...todo,
          isComplete: true,
        };
      });
      store.items = completeAll;
    },

    // delete one todo
    deleteTodo: (store, action) => {
      const deletedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = deletedItems;
    },

    // delete all todos
    deleteAllTodos: (store, action) => {
      store.items = [];
    },
  },
});

export default todos;
