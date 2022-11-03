import { createSlice } from '@reduxjs/toolkit'

const tasksWonts = createSlice({
  name: 'tasksWonts',
  initialState: {
    items: [
      { id: 1, text: 'wonts', complete: false },
      { id: 2, text: 'Follow redux codealong', complete: false },
      { id: 3, text: 'Fork weekly assignment', complete: false },
      { id: 4, text: 'Create a todo app', complete: false }
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
    }
  }
});

export default tasksWonts;
