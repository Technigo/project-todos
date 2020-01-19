import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id: 1, text: 'Dance', completed: false },
    { id: 2, text: 'Workout', completed: false },
    { id: 3, text: 'Get dressed', completed: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: { //here we will add our actions
    addTodo: (state, action) => { //2 arguments
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false })
    },
    removeTask: (state, action) => {
      // find 'cheese' or whatever item
      // remove it from the items array
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.tasks = []
    },

    toggleCompleted: (state, action) => {
      console.log(action)
      // find 'cheese'
      const foundTask = state.tasks.find((todo) => todo.id === action.payload) //todo can be banana
      console.log('found', JSON.stringify(foundTask)) //IMMER

      // toggle the value of completed 
      if (foundTask) {
        foundTask.completed = !foundTask.completed
      }
    }
  }
})