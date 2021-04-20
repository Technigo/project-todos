import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos', //good to name the same as a variable
  initialState: {
    tasks: [
      { id: 1, description: 'First taskFirst task First taskFirst taskFirst task', isComplete: false },
      { id: 2, description: 'Second task', isComplete: false },
      { id: 3, description: 'Third task', isComplete: false },
      { id: 4, description: 'Third task', isComplete: false },
      { id: 5, description: 'Third task', isComplete: false },
      { id: 6, description: 'Third task', isComplete: false }
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
      store.tasks = updatedTasks
  },
    addTask: (store, action) => {//store is passed by default by Redux
      const addTask = store.tasks.push()
    }
}})

export default todos

