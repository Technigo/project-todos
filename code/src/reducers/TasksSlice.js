import { createSlice } from '@reduxjs/toolkit'

let initId = 0

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: initId++ } }
      }
    }
  }
})

export const { addTask } = TasksSlice.actions
export default TasksSlice.reducer



