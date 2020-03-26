import { createSlice } from '@reduxjs/toolkit'

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        const { text } = action.payload
        state.push({ text, completed: false })
      }
    }
  }
})

export const { addTask } = TasksSlice.actions
export default TasksSlice.reducer



