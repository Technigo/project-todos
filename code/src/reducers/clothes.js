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
      store.clothes = [...store.clothes, action.payload];
    },
  },

  checkComplete: (store, action) => {
    store.clothes.forEach((clothes) => {
      if (clothes.id === action.payload) {
        clothes.isChecked = !clothes.isChecked
      }
    });
  },

  deletingClothes: (store, action) => {
    const filteredList = store.clothes.filter((clothes) => {
      return store.clothes.indexOf(clothes) !== action.payload
    });
    store.clothes = filteredList
  }
});

