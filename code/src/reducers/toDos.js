import { createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDos',
  initialState: {
    items: []
  },
  reducers: {
    toggleCompleted: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      })
    },
    addItem: (store, action) => {
      const inputValue = action.payload;
      store.items.push({
        id: new Date().getTime(),
        content: `${inputValue}`,
        isCompleted: false
      })
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((task) => task.id !== action.payload)
    }
  }
})
export default toDos;