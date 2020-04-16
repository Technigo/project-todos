import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'Work on ToDo', complete: true },
  { id: 2, text: 'Have fun', complete: false },
  { id: 3, text: 'Be kind', complete: true },
  { id: 4, text: 'Hug my best beetle', complete: false }
]

export const tasklist = createSlice({
  name: 'tasklist',
  initialState: tasks,
  reducers: {}
})