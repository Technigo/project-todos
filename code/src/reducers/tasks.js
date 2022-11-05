import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid'
import moment from 'moment'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      /*       { id: '1',
        text: 'Walk the dog',
        isComplete: false },
      { id: '2',
        text: 'Meeting',
        isComplete: true },
      { id: '3',
        text: 'Lunch with Sam',
        isComplete: false },
      { id: '4',
        text: 'Pay bills',
        isComplete: false } */
    ]
  },
  reducers: {
    addTask: (store, action) => {
      console.log(action)
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isCaught: false,
        postedTime: moment().startOf('hour').fromNow()
      }

      store.items = [...store.items, newTask]
    },

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      });
    },

    deleteTask: (store, action) => {
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

export default tasks;