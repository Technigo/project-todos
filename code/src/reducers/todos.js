import { createSlice, current } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import moment from 'moment'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    selectedItem: false,
    isChanged: false,
  },
  reducers: {
    addTodo: (store, action) => {
      const createdAt = new Date().getTime()
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: createdAt,
        dueDate: false,
        subTasks: [],
      }
      store.items = [...store.items, newTodo]
    },
    addAndEditTodo: (store, action) => {
      const createdAt = new Date().getTime()
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: createdAt,
        dueDate: false,
        subTasks: [],
      }
      store.items = [...store.items, newTodo]
      store.selectedItem = { ...newTodo }
    },
    toggleTodo: (store, action) => {
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
      const updatedItem = { ...store.selectedItem, ...action.payload }
      store.selectedItem = updatedItem
    },
    setIsChanged: (store, action) => {
      store.isChanged = action.payload
    },
    saveSelectedItem: store => {
      const updatedItem = store.selectedItem
      const updatedItems = store.items.map(item => {
        if (item.id === updatedItem.id) {
          return { ...updatedItem }
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    addSubTask: (store, action) => {
      const createdAt = moment()
      const newSubTask = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        createdAt: createdAt,
        dueDate: false,
      }
      const newSubTasks = [...current(store.selectedItem.subTasks), newSubTask]
      store.selectedItem.subTasks = [...newSubTasks]
    },
    toggleSubTask: (store, action) => {
      const updatedItems = store.selectedItem.subTasks.map(item => {
        if (item.id === action.payload) {
          return { ...item, isComplete: !item.isComplete }
        } else {
          return item
        }
      })
      store.selectedItem.subTasks = updatedItems
    },
    deleteSubTask: (store, action) => {
      const decreasedItems = store.selectedItem.subTasks.filter(item => item.id !== action.payload)
      store.selectedItem.subTasks = decreasedItems
    },
  },
})
