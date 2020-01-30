import { createSlice } from '@reduxjs/toolkit'

const todosList = []

const initialState = {
  todosList
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todosList.push({ id: Date.now(), name: action.payload, done: false })
    },
    removeItem: (state, action) => {
      state.todosList = state.todosList.filter((todo) => todo.id !== action.payload)
    },
    removeAll: () => {
      return initialState
    },
    toggleCompleteTodo: (state, action) => {
      const checkedTodo = state.todosList.find((todo) => todo.id === action.payload)
      checkedTodo.done = !checkedTodo.done
    }
  }
})