import {createSlice} from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState:{
    tasks: []
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
      const removeTask = store.tasks.filter(todo => todo.id !== action.payload) 

        store.tasks = removeTask
    },
    removeAllTodos: (store) => { //remove marked done todos
      const filteredTasks = store.tasks.filter(todo => !todo.isComplete)
      
      store.tasks = filteredTasks
    },
    addTodo: (store, action) => { 
      store.tasks = [...store.tasks, action.payload]
    },
    clearAllTodos: (store) => { //mark all as done! 
      const clearAllTasks = store.tasks.map((todo) => {
        return {
          ...todo,
          isComplete: true
        }
      })
      store.tasks = clearAllTasks
    }
  }
}) 

export default todos
