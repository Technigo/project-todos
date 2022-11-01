import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Do laundry',
        isDone: false
      },
      {
        id: 2,
        name: 'Make dinner',
        isDone: false
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    }
  }
})

export default todos