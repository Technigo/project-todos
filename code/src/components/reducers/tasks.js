import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1',
      text: 'Rain clothes',
      isChecked: false },
    { id: '2',
      text: 'Cap',
      isChecked: true },
    { id: '3',
      text: 'Sun Lotion',
      isChecked: true }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1)
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
