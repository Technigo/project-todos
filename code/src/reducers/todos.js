import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 'kw639pef',
        text: 'Köp mat',
        isComplete: false,
        dueDate: false,
      },
      {
        id: 'kw639tpp',
        text: 'Laga mat',
        isComplete: false,
        dueDate: false,
      },
      {
        id: 'kw63a1z9',
        text: 'Sov länge',
        isComplete: false,
        dueDate: false,
      },
      {
        id: 'kw63abx9',
        text: 'Ät maten',
        isComplete: false,
        dueDate: false,
      },
    ],
    selectedItem: {
      id: 'kw63a1z9',
      text: 'Sov länge',
      isComplete: false,
      dueDate: false,
    },
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        dueDate: false,
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
    setSelectedItem: (store, action) => {
      const modalItem = store.items.find(item => item.id === action.payload)
      store.selectedItem = modalItem
    },
    removeSelectedItem: store => {
      store.selectedItem = false
    },
    editSelectedItem: (store, action) => {
      const updatedItem = { ...store.selectedItem }
      store.selectedItem = updatedItem
    },
    saveSelectedItem: (store, action) => {
      const updatedItem = action.payload
      const updatedItems = store.items.map(item => {
        if (item.id === updatedItem.id) {
          return { ...updatedItem }
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
  },
})
