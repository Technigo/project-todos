import { createSlice } from '@reduxjs/toolkit';

const initialItems = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
const ToDo = createSlice({
  name: 'ToDos',
  initialState: { items: initialItems },

  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    },
    addToDo: (store, action) => {
      store.items.unshift(action.payload)
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    }
  }
});

export default ToDo;
