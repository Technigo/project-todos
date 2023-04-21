import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    deleteTask: (store, action) => {
      const taskLeft = store.items.filter((item) => {
        return store.item.indexOf(item) !== action.payload
      });
      store.items = taskLeft
      /* const taskLeft = store.items.findIndex((task) => tasks.id === action.payload.id)
      store.items.splice(taskLeft, 1) */
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
