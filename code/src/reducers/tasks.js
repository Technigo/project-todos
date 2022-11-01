import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      const itemInfo = action.payload;
      store.items.push(itemInfo);
    },
    toggleTask: (store, action) => {
      console.log('store:', store);
      console.log('action:', action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    }
  }
});
