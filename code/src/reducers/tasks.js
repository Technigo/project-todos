import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Gym Time!', complete: true },
    { id: 2, text: 'Do Laundry!', complete: false },
    { id: 3, text: 'Coding time!', complete: true },
    { id: 4, text: 'Fika with Priscila', complete: true }
  ]
})

