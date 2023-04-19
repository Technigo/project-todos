import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      })
    },
    addTask: (store, action) => {
      store.items.push(action.payload)
    },
    removeTask: (store, action) => {
      // mutability
      store.items.splice(action.payload, 1);
      // immutability
    }
  }

})

export default tasks