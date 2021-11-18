import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

// Takes one big object
const todos = createSlice({
  name: "todos",
  initialState: {
    // always an object on its own
    items: [],
    checkedItems: [],
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

      store.items = [newTodo, ...store.items]
      console.log("store.items", store.items)
    },

    toggleTodo: (store, action) => {
      //   store.items.forEach(item => {
      //     if (item.id === action.payload) {
      //       item.isComplete = !item.isComplete
      //     }
      //   })

      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          }
          if (item.isComplete === true) {
            alert("Here we go again")
          } else {
            alert("Good job doint things, now rest!")
          }
          return updatedTodo
        } else {
          return item
        }
      })

      store.items = updatedItems
    },

    // sortTodo: (store, action) => {
    //   const sortTodoFunction = store.items.map(item => {
    //     if (item.isComplete === true) {
    //       const updatedNotChecked = {
    //         ...checkedItems,
    //       }
    //       return updatedNotChecked
    //     } else {
    //       const updatedChecked = {
    //         ...checkedItems,
    //       }
    //       return updatedChecked
    //     }
    //   })
    //   store.checkedItems
    // },

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
    deleteAll: (store, action) => {
      console.log("delete them allllll")
      store.items = []
    },
  },
})

export default todos
// because the are only one
