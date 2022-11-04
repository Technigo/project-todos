
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
        name: 'Do the laundry',
        isCompleted: false },
      { id: '2',
        name: 'Go grocery shopping',
        isCompleted: false }
    ]
  },
  reducers: {
    setAllTasks: (store, action) => {
      store.items = action.payload;
    },
    toggleTask: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      });
    },
    deleteTask: (store, action) => {
      console.log(action);
      store.items.splice(action.payload, 1);
    },
    addTask: (store, action) => {
      console.log(action);
      store.items.push(action.payload);
    },

    deleteAllTasks: (store) => {
      store.items = []
    }
  }

});

export default tasks;