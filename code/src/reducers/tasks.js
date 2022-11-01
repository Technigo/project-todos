import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
        text: 'Walk the dog',
        isComplete: false },
      { id: '2',
        name: 'Meeting',
        isComplete: true },
      { id: '3',
        name: 'Lunch with Sam',
        isComplete: false },
      { id: '4',
        name: 'Pay bills',
        isComplete: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete
        }
      });
    }
  }
});

export default tasks;