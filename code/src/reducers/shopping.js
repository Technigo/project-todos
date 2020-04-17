import { createSlice } from '@reduxjs/toolkit'

const items = [
  { id: 1, text: 'Havreknäcke', complete: false }
]

export const shopping = createSlice({
  name: 'tasks',
  initialState: items
})