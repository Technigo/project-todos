import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, description: 'Buy toilet paper', isComplete: false },
      { id: 2, description: 'Call Nuttis', isComplete: false },
      { id: 3, description: 'Make dinner', isComplete: false }
    ],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo;
        }
      });
      store.items = updatedItems;
    },
    addTodo: (store, action) => {
      store.items.push({
        id: uniqid(),
        description: action.payload,
        isComplete: false
      })
    },
    deleteItem: (store, action) => {
      const removedItem = store.items.filter(todo => todo.id !== action.payload)
      store.items = removedItem;
    },
    clearCompleted: (store) => {
      // store.items = [] change name to clearCompleted
      const completedItems = store.items.filter(todo => todo.isComplete !== true)
      store.items = completedItems;
    },
    markAllComplete: (store) => {
      store.items = store.items.map(todo => ({
        ...todo,
        isComplete: true
      }))
    }
  }
})



