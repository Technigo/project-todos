import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleChecked: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      })
    },
    addTask: (store, action) => {
      store.items.push(action.payload);
    }
  }
});

export default tasks;