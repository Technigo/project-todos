import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '0',
        name: 'Plant seeds',
        isChecked: false },
      { id: '1',
        name: 'Buy lecakulor',
        isChecked: false }
    ]
  },

  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        name: action.payload,
        isChecked: false
      }
      store.items = [newTask, ...store.items] // this makes it immutable, by making a new array
    },

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      });
    }
  }

});
