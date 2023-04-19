import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      text: 'Test1',
      isDone: false
    },

    {
      id: 2,
      text: 'Test2',
      isDone: false
    }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isDone = !item.isDone
          console.log(item)
        }
      })
    },
    clearTasks: () => {
      return initialState
    }
  }
})