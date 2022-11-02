import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
  name: 'list',
  initialState: {
    items: [
      { id: 1, task: 'wash dishes', isDone: false },
      { id: 2, task: 'gym time', isDone: false },
      { id: 3, task: 'pick kid from school', isDone: false },
      { id: 4, task: 'coding 4-9pm', isDone: false } // isDone for toggle
    ]
  },
  reducers: {

  }
})
