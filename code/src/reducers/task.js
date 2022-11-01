import { createSlice } from '@reduxjs/toolkit'

const data = []

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: data
  },
  reducers: {
    addTask: (store, action) => {
      // eslint-disable-next-line array-callback-return
      store.items.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteItem: (store, action) => {
      store.item.splice(action.payload, 1)
    },
    addItem: (store, action) => {
      store.item.push(action.payload)
    }
  }
})

export default tasks