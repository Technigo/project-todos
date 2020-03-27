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
    },
    toggleComplete: {
      reducer(state, action) {
        const task = state.find(task => task.id === action.payload)
        if (task) {
          task.completed = !task.completed
        }
      }
    }
  }
})


export const { addTask, toggleComplete } = TasksSlice.actions
export default TasksSlice.reducer



