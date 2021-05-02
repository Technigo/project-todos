import { createSlice} from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      { id: 1, text: 'Check e-mail', isComplete: true}
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
    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    },
    removeTodo: (store, action) => {
      const decreasedTasks = store.tasks.filter(todo => todo.id !== action.payload)

      store.tasks = decreasedTasks
    },
    checkTodos: (store) => {
      const checkedTasks = store.tasks.map((todo) => {
        return {
          ...todo,
          isComplete: true
        }
      })
      store.tasks = checkedTasks
    },
    removeChecked: (store) => {
      const removeTasks = store.tasks.filter(todo => todo.isComplete === false)

      store.tasks = removeTasks
    }
  }
})

export default todos
