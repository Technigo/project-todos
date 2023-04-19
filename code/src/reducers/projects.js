/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit'

export const projects = createSlice({
  name: 'projects',
  initialState: [
    { id: 1, name: 'Small dayily tasks', complete: false },
    { id: 2, name: 'Project 2', complete: false }
  ],
  reducers: {
    addProject: (state, action) => {
      const newId = state.length ? Math.max(...state.map((project) => project.id)) + 1 : 1
      state.push({ id: newId, name: action.payload.name, complete: false })
    },
    toggleComplete: (state, action) => {
      const project = state.find((project) => project.id === action.payload)
      if (project) {
        project.complete = !project.complete
      }
    }
  }
})

export const { addProject, toggleComplete: toggleProjectComplete } = projects.actions
