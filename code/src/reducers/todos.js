import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos', //good to name the same as a variable
  initialState: {
    tasks: [
      { id: 1, description: '1aaaaaaaaaaaa', isComplete: false, createdAt: Date.now() },
      { id: 2, description: '2aaaaaaaaaaa', isComplete: false, createdAt: Date.now() },
      { id: 3, description: '3aaaaaaaaaaaaaaaaa', isComplete: false, createdAt: Date.now() },
    ]
  },
  reducers: {//methods/actions to manipulate the store
    toggleComplete: (store, action) => {//store is passed by default by Redux
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
      store.tasks = updatedTasks//immutable approach
    },
    toggleCompleteAll: (store) => {//store is passed by default by Redux
      const completedTasks = store.tasks.map(task => {
        if (task.isComplete === false) {
          return {
            ...task,
            isComplete: true
          }
        } else {
          return task
        }
      })
      store.tasks = completedTasks//immutable approach
    },
    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    },
    deleteTask: (store, action) => {
      const decreasedTasks = store.tasks.filter(task => action.payload !== task.id)
      store.tasks = decreasedTasks//immutable approach
    },
}})

export default todos

