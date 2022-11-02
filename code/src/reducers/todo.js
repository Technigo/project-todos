import { createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDos',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      store.items.push(action.payload);
    },
    toggleDone: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
      });
    }
  }
});

export default toDos;