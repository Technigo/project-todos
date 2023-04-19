import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      // Mutable (change the array)
      // store.items.push(action.payload)
      // Inmutable (sign a value to the array, get a new array, not change the origin array)
      store.items = [...store.items, action.payload]
    }
  }
})
export default tasks;