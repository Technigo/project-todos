import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        status: 'todo',
        isComplete: false
      }
      // Mutable (change the array)
      // store.items.push(action.payload)
      // Inmutable (sign a value to the array, get a new array, not change the origin array)
      store.items = [...store.items, newTask]
    },
    removeTask: (store, action) => {
      store.items = store.items.filter((task) => task.id !== action.payload)
    }
  }
})
export default tasks;