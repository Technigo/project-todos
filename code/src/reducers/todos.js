import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        tasks: [
            { id: 1, description: 'Book flight', isComplete: false },
            { id: 2, description: 'Get new passports', isComplete: false },
            { id: 3, description: 'Decide which rental to get!', isComplete: false },
            { id: 4, description: 'Buy sunscreen!!', isComplete: false },
            { id: 5, description: 'Maybe some new books?', isComplete: false },
        ]
    },
    reducers: {
      toggleComplete: (store, action) => {
        const updatedTasks = store.tasks.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isComplete: !todo.isComplete
            }
          } else {
            return todo
          }
        })
        store.tasks = updatedTasks
      },
     /*testar*/ addTask: (state, action) => {
        const newTask  = action.payload
        state.tasks.push(...action.payload)
      }
    }

})

export default todos

/*

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
      state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
}) */