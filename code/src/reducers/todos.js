import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', isComplete: true },
      { id: 2, text: 'Follow redux codealong', isComplete: true },
      { id: 3, text: 'Fork weekly assignment', isComplete: true },
      { id: 4, text: 'Create a todo app', isComplete: false },
    ],
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log('store', store);
      console.log('action', action);

      store.items.map((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
  },
});

export default todos;

// will look like this?
// initialState: {
//   items: []
// }
