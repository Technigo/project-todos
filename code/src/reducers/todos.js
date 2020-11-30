import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'love', isComplete: false },
  { id: 2, text: 'pray', isComplete: false },
  { id: 3, text: 'eat', isComplete: true },
]

const initialState = {
  tasks
}

let idCounter = tasks.length
// idCounter is immutable and equals tasks.length at this "point in code"

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: idCounter += 1, text: action.payload, isComplete: false })
      // push adds one item to the end of the existing array
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
      // filter creates a new array
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.find(task => task.id === action.payload.id)
      // find returns value of the first element that satisfies the condition
      if (action.payload.isComplete === false) {
        updatedTask.isComplete = true
      } else if (action.payload.isComplete === true) {
        updatedTask.isComplete = false
      }
    }
  }
})