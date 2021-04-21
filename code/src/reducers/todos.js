import { createSlice } from '@reduxjs/toolkit'


const todos = createSlice({
  name:'todos',
  initialState: {
    tasks: [
        { id: 1, description: 'first task', isComplete: false },
        { id: 2, description: 'second task', isComplete: false },
        { id: 3, description: 'third task', isComplete: false }
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
        const decreasedTasks = store.tasks.filter(task => task.id !== action.payload)

        store.tasks = decreasedTasks
      },
      addTodo: (store, action) => {
        store.tasks = [...store.tasks, action.payload]
      }
  }
})

export default todos