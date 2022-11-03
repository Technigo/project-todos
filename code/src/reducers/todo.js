import { createSlice } from '@reduxjs/toolkit';

const initialItems = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const todo = createSlice({
  name: 'todo',
  initialState: { items: initialItems },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  }
});

export default todo;