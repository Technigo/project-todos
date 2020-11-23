import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    {id: 1, text: 'Make breakfast', complete: false},
    {id: 2, text: 'Go to work', complete: false},
    {id: 3, text: 'Pay bills', complete: false},
    {id: 4, text: 'Call mom', complete: false}
  ]
})