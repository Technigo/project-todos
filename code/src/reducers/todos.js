import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import moment from 'moment'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 'kw6hdwq0',
        text: 'Köp mjölk',
        isComplete: false,
        createdAt: '2021-11-19T14:31:56.135Z',
        dueDate: false,
      },
      {
        id: 'kw6he1k6',
        text: 'Kolla på film',
        isComplete: false,
        createdAt: '2021-11-19T14:32:02.406Z',
        dueDate: false,
      },
      {
        id: 'kw6he4cu',
        text: 'Laga mat',
        isComplete: false,
        createdAt: '2021-11-19T14:32:06.030Z',
        dueDate: '2021-11-19T14:32:08.589Z',
      },
    ],
    selectedItem: false,
  },
  reducers: {
    addTodo: (store, action) => {
      const createdAt = moment()
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
