import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const tasks = createSlice({
  name: 'task',
  initialState: {
    items: [
      {
        id: 0,
        text: 'Continue with code along',
        complete: false,
        category: 'Studies'
      },
      {
        id: 1,
        text: 'Clean the office room',
        complete: false,
        category: 'House Chores'
      }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload.text,
        isComplete: false,
        date: new Date(),
        category: action.payload.category
      };
      store.items = [newTask, ...store.items];
    },
    toggle: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    delete: (store, action) => {
      store.items.splice(action.payload, 1);
    }
    // deleteAll: (store, action) => {
    //   store.items = [];
    // }
  }
});

export default tasks;