import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, description: 'Watch JavaScript videos', isComplete: false },
      { id: 2, description: 'Watch JavaScript videos', isComplete: false },
      { id: 3, description: 'Watch JavaScript videos', isComplete: true },
    ]

  },
  reducers: {

  }

})

export default todo