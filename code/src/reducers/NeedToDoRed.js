import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const NeedToDoRed = createSlice({
  name: 'Tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: new Date()
      }

      store.items = [...store.items, newTask]
    },

    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    }
  }
});
