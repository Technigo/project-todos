import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: []
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
    },
    clearAll: (store) => {
      let emptyArray = store.tasks
      emptyArray.length = 0
    } 
  }
})

export default todos