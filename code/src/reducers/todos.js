import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },

  reducers: {
    // a property that is a function with two arguments, store and action
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(), // be very precise when making ids. code relies on uniqueness of keys. the uniqid() creates an automatic uniq id. package to install "npm install uniqid"
        text: action.payload,
        isComplete: false,
        createdAt: new Date(),
      };

      // immutable approach
      store.items = [...store.items, newTodo]; // this spreads whatever was before (...store) and adds the new data. It makes a totally new array that adds the values of the old array PLUS the values of the new array
    },

    // this handles the delete all button
    deleteAll: (store, action) => {
      store.items = [];
    },

    // this handles if the todo is cone (checked) or not
    toggleTodo: (store, action) => {
      // the action.payload is the ID

      // immutable approach
      const updatedItems = store.items.map(item => {
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

    // this handles the delete button
    deleteTodo: (store, action) => {
      // immutable approach. This checks if the ID of the item doesn't match the ID that is action.payload, then we keep it and show only the filtered todos
      const decreasedItems = store.items.filter(
        item => item.id !== action.payload
      );
      store.items = decreasedItems;
    },

    completeAll: (store, action) => {
      const completedItems = store.items.map(todo => {
        if (!todo.isComplete) {
          return {
            ...todo,
            isComplete: true,
          };
        } else {
          return todo;
        }
      });
      store.items = completedItems;
    },

    uncompleteAll: (store, action) => {
      const uncompletedItems = store.items.map(todo => {
        if (todo.isComplete) {
          return {
            ...todo,
            isComplete: false,
          };
        } else {
          return todo;
        }
      });
      store.items = uncompletedItems;
    },

    removeAll: store => {
      store.items = [];
    },
  },
});
export default todos;
