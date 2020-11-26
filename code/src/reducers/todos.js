import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'ett', isComplete: false },
  { id: 2, text: 'två', isComplete: false },
  { id: 3, text: 'tre', isComplete: true },
]

const initialState = {
  tasks
}

let idCounter = tasks.length

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    removeTask: (state, action) => {
      // action has a key (here removeTask), and the value is a function.
      // redux will pass state and action to this function
      // the action has a name and a payload - whatever we pass into the action when we invoke it (in the component)
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    addTask: (state, action) => {
      state.tasks.push({ id: idCounter += 1, text: action.payload, isComplete: false })
    },
    updateTask: (state, action) => {
      const updatedTodo = state.tasks.find(task => task.id === action.payload.id)
      if (action.payload.isComplete === false) {
        updatedTodo.isComplete = true
      } else if (action.payload.isComplete === true) {
        updatedTodo.isComplete = false
      }
    }
  }
})