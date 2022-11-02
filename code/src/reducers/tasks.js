import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
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
        isComplete: false }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      console.log(action)
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isCaught: false
      }

      store.items = [...store.items, newTask]
    },

    /* removeTask: (store, action) => {
      const existingTask = state.items.filter((item) => item.id !== action.payload.id)
      return (
        existingTask -= 1
      )
    }, */

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      });
    }
  }
});

export default tasks;