import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        status: 'todo',
        isComplete: false
      }
      // Mutable (change the array)
      // store.items.push(action.payload)
      // Inmutable (sign a value to the array, get a new array, not change the origin array)
      store.items = [...store.items, newTask]
    },
    toggleAllTasks: (store, action) => {
      store.items = store.items.map((task) => {
        return {
          ...task,
          status: action.payload ? 'completed' : 'todo',
          isComplete: action.payload
        }
      })
    },
    toggleTask: (store, action) => {
      const updateItems = store.items.map((task) => {
        if (task.id === action.payload) {
          const updateTask = {
            ...task,
            status: task.isComplete ? 'todo' : 'completed',
            isComplete: !task.initialState
          }
          return updateTask;
        } else {
          return task
        }
      })
      store.items = updateItems
    },

    removeTask: (store, action) => {
      store.items = store.items.filter((task) => task.id !== action.payload)
    },

    changeStatus: (store, action) => {
      store.items = store.items.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            status: action.payload.value,
            isComplete: action.payload.value === 'completed'
          }
        }
        return task
      })
    }
  }
})
export default tasks;