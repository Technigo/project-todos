import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { format } from 'date-fns'

const todo = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },

  // id: Date.now().toString()
  reducers: {
    addTodo: (store, action) => {
      const newTask = {
        text: action.payload,
        isCompleted: false,
        id: uniqid(),
        // ändra  id: till date?
        // editable: false,
        createdAt: format(new Date(), 'LLL d, yyyy | HH:mm')
      }
      // store.items.push(action.payload);
      // Immutable
      store.items = [newTask, ...store.items];
    },

    toggleTodo: (store, action) => {
      const updatedItem = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = { ...item, isCompleted: !item.isCompleted }
          return (updatedTodo)
        } else {
          return item
        }
      })
      store.items = updatedItem
    },

    deleteTodo: (store, action) => {
      // Immutable
      const filteredItems = store.items.filter((item) => item.id !== action.payload);
      store.items = filteredItems;
    },

    deleteAll: (store) => {
      store.items = []
    },

    completeAll: (store) => {
      const allCompleted = store.items.map((task) => {
        return {
          ...task,
          isCompleted: true
        }
      })
      store.items = allCompleted
    }
  }
})

export default todo;