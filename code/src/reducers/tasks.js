import { createSlice, nanoid } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const allTasks = [
  { id: 1, title: "Finish project", isCompleted: false, isHidden: false, dueDate: new Date("April 25, 2021") },
  { id: 2, title: "Call mum", isCompleted: false, isHidden: false, dueDate: new Date("April 19, 2021") },
  { id: 3, title: "Get a haircut", isCompleted: true, isHidden: false, dueDate: new Date("May 2, 2021") },
]

const tasks = createSlice({
  name: "tasks",
  initialState: {
    allTasks,
    isFiltered: false
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.allTasks.push({ id: action.payload.id, title: action.payload.title, isCompleted: false, isHidden: false, dueDate: action.payload.content })
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    },
    removeTask: (state, action) => {
      if (action.payload) {
        state.allTasks = state.allTasks.filter(task => task.id !== action.payload.id)
      } else {
        state.allTasks = []
      }
    },
    toggleTask: (state, action) => {
      const updatedItems = state.allTasks.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        } else {
          return task
        }
      })
      state.allTasks = updatedItems
    },
    completeAllTasks: (state, action) => {
      for (let task of state.allTasks) {
        task.isCompleted = true
      }
    },
    filterCompleted: (state, action) => {
      for (let task of state.allTasks) {
        if (!task.isCompleted) {
          task.isHidden = true
        } else if (task.isCompleted) {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    filterUncompleted: (state, action) => {
      for (let task of state.allTasks) {
        if (task.isCompleted) {
          task.isHidden = true
        } else if (!task.isCompleted) {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    filterDueSoon: (state, action) => {
      for (let task of state.allTasks) {
        if (!task.dueDate || task.isCompleted || dayjs(task.dueDate).isSameOrBefore(new Date())) {
          task.isHidden = true
        } else {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    filterOverdue: (state, action) => {
      for (let task of state.allTasks) {
        if (!task.dueDate || task.isCompleted || !dayjs(task.dueDate).isSameOrBefore(new Date())) {
          task.isHidden = true
        } else {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    resetFilter: (state, action) => {
      for (let task of state.allTasks) {
        task.isHidden = false
      }
      state.isFiltered = false
    }
  }
})

export default tasks