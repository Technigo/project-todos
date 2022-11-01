import { createSlice } from '@reduxjs/toolkit';

const toDoList = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
        name: 'Laundry',
        done: true },
      { id: '2',
        name: 'Groceries',
        done: false }
    ]
  },
  reducer: {
    toggleDone: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
      })
    }
  }
});

export default toDoList;