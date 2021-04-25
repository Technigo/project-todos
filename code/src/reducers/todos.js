import { createSlice } from '@reduxjs/toolkit'


const todos = createSlice({
  name:'todos',
  initialState: {
    tasks: []
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
        const decreasedTasks = store.tasks.filter(task => task.id !== action.payload)

        store.tasks = decreasedTasks
      },
      addTodo: (store, action) => {
        store.tasks = [...store.tasks, action.payload]
      },
      deleteTodo: (store, action) => {
        store.tasks = [] 
      }
  }
})

export default todos