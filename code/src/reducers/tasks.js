import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '0',
        name: 'Plant seeds',
        isChecked: false },
      { id: '1',
        name: 'Buy lecakulor',
        isChecked: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      });
    }
  }

});
