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
          item.isCompleted = !item.isCompleted
        }
      })
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    },
    deleteTodo: (store, action) => {
      const updatedItems = store.items.filter(
        (item) => item.id !== action.payload
      )
      store.items = updatedItems
    }
  }
});
export default todo;