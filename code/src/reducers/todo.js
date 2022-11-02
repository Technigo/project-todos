import { createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDos',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      
    },
    toggleDone: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
        console.log(store)
        console.log(action)
      })
    }
  }
});

export default toDos;