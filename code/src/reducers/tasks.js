import { createSlice } from '@reduxjs/toolkit'

const tasksTodo = [
  { id: 1, text: 'Start using the Todo-App', complete: false }
] 

export const tasks = createSlice({
  name: 'tasks',
  initialState: tasksTodo
})