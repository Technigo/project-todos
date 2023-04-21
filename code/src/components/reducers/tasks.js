import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
        text: 'Rain clothes',
        isChecked: true },
      { id: '2',
        text: 'Cap',
        isChecked: true },
      { id: '3',
        text: 'Sun Lotion(half left)',
        isChecked: true },
      { id: '4',
        text: 'Extra pants(2)',
        isChecked: false },
      { id: '5',
        text: 'Jacket, yellow one',
        isChecked: false },
      { id: '6',
        text: 'The green backpacket',
        isChecked: false }
    ]
  },
  reducers: {
    addNewTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    deleteTask: (store, action) => {
      store.items.filter((item) => item.id !== action.payload.id)
    },
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      })
    }
  }
})

export default tasks;
