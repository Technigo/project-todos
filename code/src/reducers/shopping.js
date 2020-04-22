import { createSlice } from '@reduxjs/toolkit'

const items = [
  { id: 1, text: 'Havreknäcke', complete: false, category: 'bread' }
]

export const shopping = createSlice({
  name: 'tasks',
  initialState: items
})