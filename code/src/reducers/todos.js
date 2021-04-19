import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, description: 'Test', isComplete: false },
      { id: 2, description: 'Test2', isComplete: false },
      { id: 3, description: 'Test3', isComplete: false }
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
    }
  }
})