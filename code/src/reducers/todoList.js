import { createSlice } from '@reduxjs/toolkit'

const todoList = createSlice ({
  name: 'todolist',
  initialState: {
    tasks: [
      { id: 1, description: 'my first task!', isComplete: false },
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        } else {
          return task
        }
      })
      store.tasks = updatedTasks
    },

    removeTask: (store, action) => {
      const remainingTasks = store.tasks.filter(task => task.id !== action.payload)
      store.tasks = remainingTasks
    },

    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    }
  }
})

export default todoList;