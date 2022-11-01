import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1,
        text: 'Watch video',
        completed: true },
      { id: 2,
        text: 'Walk dog',
        completed: false },
      { id: 3,
        text: 'Feed cat',
        completed: true },
      { id: 4,
        text: 'Feed self',
        completed: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    }
  }
});
