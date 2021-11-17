import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        complete: false
      };
      state.items = [...state.items, newTask];
    },
    toggleCheck: (state, action) => {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload) {
          const updatedCheck = {
            ...item,
            complete: !item.complete
          };
          return updatedCheck;
        } else {
          return item;
        }
      });
      state.items = updatedItems;
    },
    deleteTask: (state, action) => {
      const leftItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = leftItems;
    }
  }
});

export default tasks;
