import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
/*       { id: 1, description: 'Book flight', time: Date.now(), isComplete: false },
      { id: 2, description: 'Get new passports', time: Date.now(), isComplete: false },
      { id: 3, description: 'Decide which rental to get!', time: Date.now(), isComplete: false },
      { id: 4, description: 'Buy sunscreen!!', time: Date.now(), isComplete: false },
      { id: 5, description: 'Maybe some new books?', time: Date.now(), isComplete: false }, */
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })
      store.tasks = updatedTasks
    },
    removeToDo: (store, action) => {
      const removed = store.tasks.filter(todo => todo.id !== action.payload)
      store.tasks = removed
    },
    addToDo: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    },
    allDone: (store) => {
      store.tasks.map((task) => (
        task.isComplete = true
      ))
    },
    allUndone: (store) => {
      store.tasks.map((task) => (
        task.isComplete = false
      ))
    }
  }
})

export default todos