import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    }
  }
})

