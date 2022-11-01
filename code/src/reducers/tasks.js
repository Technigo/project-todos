import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';

const initialState = {
  items: [
    { id: 1, text: 'Gym Time!', complete: true, createdAt: new Date() }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        complete: false,
        createdAt: moment()
      }
      store.items = [...store.items, newTask]
    },

    toggleTask: (store, action) => {
      const updatedTasks = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedBoard = {
            ...item,
            complete: !item.complete
          }
          return updatedBoard
        } else {
          return item
        }
      })
      store.items = updatedTasks
    },

    deleteTask: (store, action) => {
      const decreasedTasks = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedTasks
    },
    clear: () => {
      return initialState
    }
  }
});

