import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: 0,
        text: 'Continue with code along',
        isComplete: false,
        date: Date.now()
      },
      {
        id: 1,
        text: 'Clean the office room',
        isComplete: false,
        date: Date.now()
      }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload.text,
        isComplete: false,
        date: Date.now()
      };
      store.items = [newTask, ...store.items];
    },
    toggle: (store, action) => {
      const task = store.items.find((item) => item.id === action.payload.id);
      task.isComplete = !task.isComplete;
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    deleteAll: (store) => {
      store.items = [];
    }
  }
});

export default tasks;
