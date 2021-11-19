import { createSlice, current } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import moment from 'moment'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 'kw6shaur',
        text: 'Code the code',
        isComplete: false,
        createdAt: '2021-11-19T19:42:30.194Z',
        dueDate: '2021-11-14T19:46:26.000Z',
        subTasks: [],
      },
      {
        id: 'kw6shw22',
        text: 'Review the review',
        isComplete: false,
        createdAt: '2021-11-19T19:42:57.674Z',
        dueDate: '2021-11-20T19:00:00.000Z',
        subTasks: [
          {
            id: 'kw6sjuab',
            text: 'Read it',
            isComplete: false,
            createdAt: '2021-11-19T19:44:28.691Z',
            dueDate: false,
          },
          {
            id: 'kw6sk73e',
            text: 'Ask the questions...',
            isComplete: false,
            createdAt: '2021-11-19T19:44:45.290Z',
            dueDate: false,
          },
        ],
      },
      {
        id: 'kw6slwfo',
        text: 'Submit the code 🛀',
        isComplete: false,
        createdAt: '2021-11-19T19:46:04.788Z',
        dueDate: false,
        subTasks: [],
      },
      {
        id: 'kw6sm9tv',
        text: 'Dance 💃',
        isComplete: false,
        createdAt: '2021-11-19T19:46:22.147Z',
        dueDate: false,
        subTasks: [],
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
        subTasks: [],
      }
      store.items = [...store.items, newTodo]
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
