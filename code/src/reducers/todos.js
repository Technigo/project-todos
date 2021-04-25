import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        description: 'First',
        isComplete: false
      },
      {
        id: 2,
        description: 'Second',
        isComplete: true
      },
      {
        id: 3,
        description: 'Third',
        isComplete: true
      },
      {
        id: 4,
        description: 'First',
        isComplete: false
      },
      {
        id: 5,
        description: 'Second',
        isComplete: false
      },
      {
        id: 6,
        description: 'Third',
        isComplete: false
      }
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })

      store.items = updatedItems
      console.log(store.items)
    },
    removeTodo: (store, action) => {
      const decreasedItems = store.items.filter(todo => todo.id !== action.payload)
      store.items = decreasedItems
    },
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
})

export default todos