import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

// create a variable that takes one object/argument
const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [] //array of todos
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action)
      const data = action.payload 

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false //trigger our todos whether they are completed or not
      }

      // v1 Mutability approach
      // store.items.push(data)

      // v2 Immutability approach
      store.items = [...store.items, newTodo]
    },
    toggleTodo: (store, action) => {
      
      // v1 mutability approach
      // store.items.forEach(item => {
      //   if (item.id === action.payload) {
      //     item.isComplete = !item.isComplete
      //   }
      // })

      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          const updatedTodo = {
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
  },
})

export default todos