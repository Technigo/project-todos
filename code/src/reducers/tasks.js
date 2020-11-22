import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice({
  name: 'tasks',
  
  initialState: [
    { id: 1, text: 'Create a store', complete: true },
    { id: 2, text: 'Create components', complete: false },
    { id: 3, text: 'Mobile first', complete: false },
    { id: 4, text: 'Buy Pepsi Max', complete: true }
  ],

  reducers: {
    addTask: (state, action) => {
      console.log('heellloooo')
    }
  }
})
