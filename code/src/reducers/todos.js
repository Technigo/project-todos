import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (store, action) => {
      const newTodosList = [...store.items, action.payload]
      store.items = newTodosList;
    },
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })
      store.items = updatedItems
    },
    removeToDo: (store, action) => {
      store.items = store.items.filter((todo) => todo.id !== action.payload)
    },
    markAllTodos: (store) => {
      const markAll = store.items.map((todo) => {
          return {
              ...todo, 
              isComplete: true
          }
      })
      store.items = markAll
    },
    deleteAllTodos: () => {
      return initialState
  }
  }
})

export default todos