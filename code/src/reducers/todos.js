import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      //   console.log(action)
      //   const data = action.payload

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        status: 'todo',
        isComplete: false,
      }

      // v1 mutability approach
      //   store.items.push(data)

      // v2 immutability approach
      //   store.items = [...store.items, data]
      store.items = [...store.items, newTodo]
    },
    toggleAllTodos: (store, action) => {
      store.items = store.items.map((item) => {
        return {
          ...item,
          status: action.payload ? 'completed' : 'todo',
          isComplete: action.payload,
        }
      })
    },
    toggleTodo: (store, action) => {
      //   console.log(action)
      // v1 mutability approach
      //   store.items.forEach((item) => {
      //     if (item.id === action.payload) {
      //       item.isComplete = !item.isComplete
      //     }
      //   })

      // v2 immutability approach
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            // id: item.id,
            // text: item.text,
            // isComplete: item.isComplete,
            ...item,
            status: item.isComplete ? 'todo' : 'completed',
            isComplete: !item.isComplete,
          }
          return updatedTodo
        } else {
          return item
        }
      })

      store.items = updatedItems
    },
    removeTodo: (store, action) => {
      // v1 mutability approach (index in action.payload)
      // store.items.splice(index, numberOfElementToDeleteFromThatIndex)
      //   store.items.splice(action.payload, 1)

      // v2 immutability approach (id in action.payload)
      const decreaseItems = store.items.filter(
        (item) => item.id !== action.payload
      )

      store.items = decreaseItems
    },
    changeStatus: (store, action) => {
      store.items = store.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: action.payload.value,
            isComplete: action.payload.value === 'completed',
          }
        }
        return item
      })
    },
  },
})

export default todos
