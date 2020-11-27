import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      description: 'Test 1',
      completed: false
    },
    {
      id: 2,
      description: 'Test 2',
      completed: false
    },
    {
      id: 3,
      description: 'Test 3',
      completed: false
    }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleCompleted: (state, action) => {
      console.log(action.payload)
      const clickedItem = state.items.find((item) => item.id === action.payload)
      if (clickedItem) {
        clickedItem.completed = !clickedItem.completed
      }
    }
  }
})