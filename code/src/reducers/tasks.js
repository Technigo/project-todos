import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id: 1, text: 'Create a store', complete: true },
    { id: 2, text: 'Create components', complete: false },
    { id: 3, text: 'Mobile first', complete: false },
    { id: 4, text: 'Buy Pepsi Max', complete: true }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (state, action) => {
      //const {text, category, dueDate} = action.payload
      // state.tasks.push({name, category, dueDate})
      state.tasks.push(action.payload);
    },
    removeAll: (state, action) => {
      state.tasks = []
    }
  }
})
