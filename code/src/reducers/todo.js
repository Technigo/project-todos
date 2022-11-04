import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const toDos = createSlice({
  name: 'toDos',
  initialState,
  reducers:
  {
    addTask: (store, action) => {
      store.items.push(action.payload);
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    toggleDone: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
      });
    },
    clearAll: () => {
      return initialState;
    }
  }
});

export default toDos;