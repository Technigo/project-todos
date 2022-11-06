import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '0',
        name: 'Plant seeds',
        isChecked: true },
      { id: '1',
        name: 'Buy lecakulor',
        isChecked: false },
      { id: '2',
        name: 'Dig dirt',
        isChecked: true },
      { id: '3',
        name: 'Watch it grow',
        isChecked: false }
    ]
  },

  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
      // this makes it immutable, by making a new array
    },

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      });
    },

    deleteTask: (store, action) => {
      // Mutability example
      // store.items.splice(action.payload, 1);
      // Immutability
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      });
      store.items = updatedItems
    }
  }

});
