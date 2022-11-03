import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [{ id: 1,
      name: 'Feed cat',
      completed: false },
    { id: 2,
      name: 'Feed self',
      completed: false }]
  },

  reducers: {
    toggleItem: (store, action) => {
    // Toggles between true and false
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    addTodo: (store, action) => {
      store.items.push(action.payload)
    },
    removeItem: (store, action) => {
      // takes the items array and filters all items with id that is not equal to payload.
      const removedTask = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = removedTask;
    },
    deleteAllTasks: (store) => {
      store.items = []
    }
  }
});
