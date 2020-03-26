import { createSlice } from '@reduxjs/toolkit'

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      }
    }
  }
})

export const { addTask } = TasksSlice.actions
export default TasksSlice.reducer



