import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  completedCount: 0
};

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.items = action.payload
      store.completedCount = action.payload.filter((item) => item.checked).length
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
      localStorage.setItem('taskList', JSON.stringify(store.items));
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
      store.completedCount = store.items.filter((item) => item.checked).length
      localStorage.setItem('taskList', JSON.stringify(store.items));
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
      store.completedCount = store.items.filter((item) => item.checked).length
      localStorage.setItem('taskList', JSON.stringify(store.items));
    }
  }
})

export default tasks;