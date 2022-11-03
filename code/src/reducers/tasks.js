import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: false, priority: 1 },
      { id: 2, text: 'Follow redux codealong', complete: false, priority: 2 },
      { id: 3, text: '5', complete: false, priority: 5 },
      { id: 4, text: '3', complete: false, priority: 3 }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    removeItem: (store, action) => {
      store.items.splice(action.payload, 1); /* Sets the inex to 1 as initial state */
    }
  }
});
export default tasks;
