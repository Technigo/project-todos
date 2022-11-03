import { createSlice } from '@reduxjs/toolkit';

const toDoItems = createSlice({
  name: 'task-items',
  initialState: {
    items: [
      { id: '1',
        name: 'Pickachu',
        isCaught: false },
      { id: '2',
        name: 'Sandshrew',
        isCaught: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
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