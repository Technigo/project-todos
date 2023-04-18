import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      task: 'Test1',
      isDone: false
    },

    {
      id: 2,
      task: 'Test2',
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
    clearTasks: () => {
      return initialState
    }
  }
})