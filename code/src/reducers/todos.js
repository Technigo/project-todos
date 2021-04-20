import { createSlice } from '@reduxjs/toolkit';

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
      store.items.push(action.payload)
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    },
    clearAll: (store, action) => {
      store.items = store.items.filter((item) => item.id === action.payload.id)
    },
    countAll: (store, action) => {
      return updatedItems.lenght
    }
  }
})



