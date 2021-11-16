import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

// Takes one big object
const todos = createSlice({
  name: "todos",
  initialState: {
    // always an object on its own
    items: [],
  },

  reducers: {
    // method to update the store, reducers will always look lite this:
    // The will always contain store and action. U will always use store but not action (for example increase)
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      }

      store.items = [...store.items, newTodo]
      console.log("store.items", store.items)
    },

    toggleTodo: (store, action) => {
      //   store.items.forEach(item => {
      //     if (item.id === action.payload) {
      //       item.isComplete = !item.isComplete
      //     }
      //   })

      const updatedItems = store.items.map(item => {
        if (item.isComplete) {
          console.log("true")
        } else {
          console.log("not true")
        }
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
      //v1 - Mutability approach (splice(index, noOfItmetoDelete))
      //   store.items.splice(action.payload, 1)
      console.log("inside deletetodo reducer")
      // v2 Immutability (id in action.payload)
      const decreasedItems = store.items.filter(
        item => item.id !== action.payload
      )
      store.items = decreasedItems
    },
  },
})

export default todos
// because the are only one
