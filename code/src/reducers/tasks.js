import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
  // completedCount: 0
};

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    toggleChecked: (store, action) => {
      const { id } = action.payload
      // the same as writing const id = action.payload.id, but using object destructuring
      // to target checked property of the specific task item
      store.items = store.items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    // store.completedCount = store.items.filter((item) => item.checked).length
    }
  }
})

export default tasks;