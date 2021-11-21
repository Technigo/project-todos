import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"
import Swal from "sweetalert2"

// Takes one big object
const todos = createSlice({
  name: "todos",
  initialState: {
    // always an object on its own
    items: [
      {
        id: "uniqid()",
        text: "Handla",
        isComplete: false,
        time: Date.now(),

        color: ["green", "red"],
      },
    ],
  },

  reducers: {
    // method to update the store, reducers will always look lite this:
    // The will always contain store and action. U will always use store but not action (for example increase)
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        time: Date.now(),
        color: [
          "var(--yellow)",
          "var(--orange)",
          "var(--green)",
          "var(--yellow)",
          "var(--orange)",
          "var(--green)",
          "var(--yellow)",
          "var(--orange)",
          "var(--green)",
        ],
      }

      store.items = [newTodo, ...store.items]
      console.log("store.items", store.items)
    },

    // addColor: (store, action)=> {
    //   color: ["green"],
    // },

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
          if (item.isComplete === !true) {
            Swal.fire({
              title: "Good job!",
            })
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
    deleteAll: (store, action) => {
      store.items = []
    },
  },
})

export default todos
// because the are only one
