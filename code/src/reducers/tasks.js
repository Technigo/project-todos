import { createSlice } from '@reduxjs/toolkit'

const allTasks = [
  { id: 1, title: "Take a nap" },
  { id: 2, title: "Eat cake" },
  { id: 3, title: "Take a walk" },
]

export const tasks = createSlice({
  name: "tasks",
  initialState: allTasks,
  reducers: {
    addTask: (state, action) => {

    },
    removeTask: (state, action) => {

    },
    toggleTask: (state, action) => {

    }
  }
})