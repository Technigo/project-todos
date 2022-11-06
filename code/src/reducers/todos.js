
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({

  // Example tasks shown in the beginning, resets when page is reloaded
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

    // is used in TaskList.js, sets checkbox to complete or not
    toggleTask: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      });
    },

    // is used in TaskList.js, deletes task
    deleteTask: (store, action) => {
      console.log(action);
      store.items.splice(action.payload, 1);
    },

    // is used in AddTask.js, adds one task
    addTask: (store, action) => {
      console.log(action);
      store.items.push(action.payload);
    },

    // Is used in DeleteAllBtn.js, deletes all of the tasks
    deleteAllTasks: (store) => {
      store.items = []
    }
  }

});

export default tasks;