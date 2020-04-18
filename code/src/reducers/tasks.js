import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: "Test list",
    items: [
      {
        description: "This is a test todo",
        done: false
      }
    ]
  } 
}


export const tasks = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTodo:(state, action) => {
      const { itemInfo } = action.payload
      state.list.items.push(itemInfo)
    }

  }
})
// Reducers needed:
// addTask
// removeTask
// setDone
// option: rensa listan?