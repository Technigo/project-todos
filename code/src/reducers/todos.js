import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const { category } = action.payload
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        category,
      }
      // immutability approach to adding items 👇
      store.items = [...store.items, newTodo]
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
      //immunatibity approach to deleting items 👇
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      )

      store.items = decreasedItems
    },

    completeAllTasks: (store, action) => {
      const completeAll = store.items.map((item) => {
        return {
          ...item,
          isComplete: true,
        }
      })
      store.items = completeAll
    },
  },
})

export default todos
