import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    counter: 4,
    todos: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false }
    ]
  },

  reducers: {
    addItem: (state, action) => {
      const taskToAdd = action.payload

      const newState = state

      const newItem = {
        id: state.counter + 1,
        text: taskToAdd.task,
        complete: false
      }
      newState.todos.push(newItem)

      newState.counter = state.counter + 1

      return newState
    },

    deleteItem: (state, action) => {
      const taskToDelete = action.payload

      const newState = state
      const newTodos = state.todos.filter((task) => task.id !== taskToDelete)
      newState.todos = newTodos

      return newState

    }

  }



})
