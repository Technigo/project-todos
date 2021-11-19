import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 'kw68dol9',
        text: 'Hej',
        isComplete: false,
        createdAt: '2021-11-19T10:19:49.053Z',
        dueDate: '2021-11-19T15:23:00.614Z',
      },
      {
        id: 'kw68dvwe',
        text: 'Hej igen!',
        isComplete: false,
        createdAt: '2021-11-19T10:19:58.526Z',
        dueDate: false,
      },
      {
        id: 'kw68e1qu',
        text: 'Köp blöjor!',
        isComplete: false,
        createdAt: '2021-11-19T10:20:06.102Z',
        dueDate: false,
      },
      {
        id: 'kw68e91y',
        text: 'Köp fler blöjor!',
        isComplete: false,
        createdAt: '2021-11-19T10:20:15.574Z',
        dueDate: false,
      },
    ],
    selectedItem: false,
  },
  reducers: {
    addTodo: (store, action) => {
      const createdAt = new Date()
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: createdAt,
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
