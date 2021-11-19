import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        time: Date.now(),
      }

      store.items = [newTodo, ...store.items]
    },
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
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
    deleteTodo: (store, action) => {
      // Immutability approach (id in action.payload)
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      )

      store.items = decreasedItems
    },

    completeAllTodos: (store) => {
      const itemsAllCompleted = store.items.map((item) => {
        return {
          ...item,
          isComplete: true,
        }
      })
      store.items = itemsAllCompleted
    },

    removeAllTodos: (store) => {
      return {
        ...store,
        items: [],
      }
    },
  },
})

export default todos
