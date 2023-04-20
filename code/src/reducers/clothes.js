import { createSlice } from '@reduxjs/toolkit';

export const clothes = createSlice({
  name: 'clothes',
  initialState: {
    items: [
      { id: '0',
        name: 'Rain clothes',
        isChecked: false },
      { id: '1',
        name: 'Cap',
        isChecked: true },
      { id: '3',
        name: 'Sun Lotion',
        isChecked: true }
    ]
  },

  reducers: {
    addNewClothes: (store, action) => {
      store.items = [...store.items, action.payload];
    }
  },

  checkComplete: (store, action) => {
    store.items.forEach((item) => {
      if (item.id === action.payload) {
        item.isChecked = !item.isChecked
      }
    });
  },

  deletingClothes: (store, action) => {
    const filteredList = store.items.filter((item) => {
      return store.items.indexOf(item) !== action.payload
    });
    store.item = filteredList
  }
});

export default clothes;
