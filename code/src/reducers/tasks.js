/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      // {
      //   id: Date.now().toString(),
      //   text: 'Damiens code along',
      //   complete: false,
      // }
    ],
  },

  reducers: {
    toggleTask: (store, action) => {
      console.log('store toggleTask:', store);
      console.log('action toggleTask:', action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },

    addTask: (store, action) => {
      // Mutable
      // store.items.push(action.payload);

      // Immutable, best practice
      store.items = [...store.items, action.payload];
      // Example of what "..." does:
      // const x = [a,b,c]
      // const y = [x,d] => [[a,b,c], d]
      // const z = [...x,d] => [a,b,c,d]
    },

    removeTask: (store, action) => {
      // Mutability
      // we are deleting one item at a time
      // store.items.splice(action.payload, 1);

      // Immutability, best practice
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = updatedItems;
    },
    setAllItems: (store, action) => {
      store.items = action.payload;
    },

    clearTasks: (store) => {
      store.items = [];
    },
  },
});

export default tasks;
