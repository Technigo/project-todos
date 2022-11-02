import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1', text: 'Clean', complete: false },
      { id: '2', text: 'Homework', complete: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },

    addTask: (store, action) => {
      store.items.push(action.payload);
    },

    deleteTask: (store, action) => {
      const filteredTasks = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = filteredTasks;
    }
  }
});
