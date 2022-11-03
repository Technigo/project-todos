import { createSlice } from '@reduxjs/toolkit';

const toDoItems = createSlice({
  name: 'task-list',
  initialState: {
    items: [
      { id: '1',
        name: 'Pickachu',
        isDone: false },
      { id: '2',
        name: 'Sandshrew',
        isDone: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },

    deleteItem: (store, action) => {
      // Mutable
      store.items.splice(action.payload, 1);
    },

    addItem: (store, action) => {
      console.log(action);
      // Mutable
      store.items.push(action.payload);
    }
  }
});

export default toDoItems;