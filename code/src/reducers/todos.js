import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 'kw4k9t3i',
        text: 'Hej',
        isComplete: false,
      },
      {
        id: 'kw4k9wov',
        text: 'HEj igen',
        isComplete: true,
      },
      {
        id: 'kw4k9zqn',
        text: 'Hej då',
        isComplete: false,
      },
      {
        id: 'kw4ka3bz',
        text: 'Va då`?',
        isComplete: false,
      },
    ],
    modalItem: {
      id: 'kw4ka3bz',
      text: 'Va då`?',
      isComplete: false,
    },
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      }
      store.items = [...store.items, newTodo]
    },
    toggleTodo: (store, action) => {
      console.log(action)

      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, isComplete: !item.isComplete }
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(item => item.id !== action.payload)
      store.items = decreasedItems
    },
    clearAllTodos: store => {
      store.items = []
    },
    setModalItem: (store, action) => {
      const modalItem = store.items.find(item => item.id === action.payload)
      store.modalItem = modalItem
    },
    removeModalItem: store => {
      store.modalItem = false
    },
  },
})
