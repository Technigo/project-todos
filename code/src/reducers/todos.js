import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      { id: 1, description: 'First task', isComplete: false },
      { id: 2, description: 'Second task', isComplete: true },
      { id: 3, description: 'Third task', isComplete: false } //ALL THIS CAN BE REMOVED AND JUST EMPTY ARRAY LATER
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })

      store.tasks = updatedTasks
    },
    removeTodo: (store, action) => {
      const decreasedTasks = store.tasks.filter(todo => todo.id !== action.payload) 

      store.tasks = decreasedTasks
    },
    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    }
  }
})

export default todos