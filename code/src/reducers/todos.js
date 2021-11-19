import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        status: 'todo',
        isComplete: false,
      }

      store.items = [...store.items, newTodo]
    },

    toggleAllTodos: (store, action) => {
      store.items = store.items.map((item) => {
        return {
          ...item,
          status: action.payload ? 'completed' : 'todo',
          isComplete: action.payload,
        }
      })
    },

    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            status: item.isComplete ? 'todo' : 'completed',
            isComplete: !item.isComplete,
          }
          return updatedTodo
        } else {
          return item
        }
      })

      store.items = updatedItems
    },

    removeTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },

    changeStatus: (store, action) => {
      store.items = store.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: action.payload.value,
            isComplete: action.payload.value === 'completed',
          }
        }
        return item
      })
    },
  },
})

export default todos
