import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({ name: 'tasks',
  initialState: {
    todos: [
      { id: 0, text: 'Plugga', complete: true },
      { id: 1, text: 'Gamea', complete: false },
      { id: 2, text: 'Kodea', complete: true },
      { id: 3, text: 'Chilla', complete: true }
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