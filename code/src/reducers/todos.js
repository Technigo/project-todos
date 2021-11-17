import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action)

      const { input, category } = action.payload

      const newTodo = {
        id: uniqid(),
        text: input,
        isComplete: false,
        category: category
      }

      //v1 Mutability approach - works in Redux because of Immer "under the hood" - but not in vanilla React
      // store.items.push(data)

      //v2 Immutability approach - Preferred in Redux but necessary in vanilla React
      store.items = [newTodo, ...store.items]
    },
    toggleTodo: (store, action) => {
      console.log(action)

      //v1  Mutability approach
      // store.items.forEach((item) => {
      //   if (item.id === action.payload) {
      //     item.isComplete = !item.isComplete
      //   }
      // })

      //v2  Immutability approach
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            // id: item.id,
            // text: item.text,
            // isComplete: isComplete,
            ...item,
            isComplete: !item.isComplete
          }
          return updatedTodo
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    deleteTodo: (store, action) => {
      //v1  Mutability approach (index in action.payload)
      // store.items.splice(action.payload, 1)

      //v2  Immutability approach
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      )

      store.items = decreasedItems
    }
  }
})
