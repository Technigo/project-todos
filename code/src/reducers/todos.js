import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

// Takes one big object
const todos = createSlice({
  name: 'todos',
  initialState: {
    // always an object on its own
    items: [
      {
        id: uniqid(),
        text: 'Put your to do here',
        isComplete: false,
        time: Date.now(),
        color: ['var(--green)'],
      },
    ],
  },

  reducers: {
    // method to update the store, reducers will always look lite this:
    // The will always contain store and action. U will always use store but not action (for example deleteAll)
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        time: Date.now(),
        color: [
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
          'var(--yellow)',
          'var(--orange)',
          'var(--green)',
        ],
      }

      store.items = [newTodo, ...store.items]
    },
    // action.payload = chosen id
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          // use the spread operator to keep all of the object the same and modify only one parameter
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          }

          return updatedTodo
        } else {
          return item
        }
      })

      store.items = updatedItems
    },

    // action.payload = chosen id
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload,
      )
      store.items = decreasedItems
    },

    deleteAll: (store, action) => {
      store.items = []
    },
  },
})

export default todos
