import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({ name: 'tasks',
  initialState: {
    todos: [
      { id: 0, text: 'Study', complete: true },
      { id: 1, text: 'Work out', complete: false },
      { id: 2, text: 'Code', complete: true },
      { id: 3, text: 'Chill', complete: false }
    ]
  },
  reducers: {
    addTask(state, action) {
      state.todos.push(action.payload)
    },
    completeTask(state, action) {
      const todo = state.todos.find((t) => t.id === action.payload)
      todo.complete = !todo.complete
    },
    deleteTask(state, action) {
      // state = state.filter((t) => t.id !== action.payload)
      const todo = state.todos.find((t) => t.id === action.payload)
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    deleteAllTasks(state) {
      state.todos = []
    },
    completeAllTasks(state) {
      state.todos.forEach((t) => { t.complete = true })
    }
  } })