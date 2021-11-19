import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all'
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action)

      const { input, category } = action.payload

      const newTodo = {
        id: uniqid(),
        text: input,
        isComplete: false,
        category: category
      }
      store.items = [newTodo, ...store.items]
    },
    toggleTodo: (store, action) => {
      console.log(action)

      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete
          }
          return updatedTodo
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      )

      store.items = decreasedItems
    },
    changeFilter: (store, action) => {
      store.filter = action.payload
    }
  }
})

export const filteredTodos = (store) => {
  const filter = store.todos.filter
  const todos = store.todos.items
  if (filter === 'all') {
    return todos
  }
  if (filter === 'business') {
    return todos.filter((item) => {
      return item.category === 'business'
    })
  }
  if (filter === 'personal') {
    return todos.filter((item) => {
      return item.category === 'personal'
    })
  }
  if (filter === 'shopping') {
    return todos.filter((item) => {
      return item.category === 'shopping'
    })
  }
}
