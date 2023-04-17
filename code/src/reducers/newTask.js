import { createSlice } from '@reduxjs/toolkit';

export const newTask = createSlice({
  name: 'newTask',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },

    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    }
  }
})