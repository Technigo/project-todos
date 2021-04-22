import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          // update isComplete property
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          // leave it as it was 
          return todo
        }
      })
      
      store.items = updatedItems
    },
    removeTodo: (store, action) => {
      const decreseasedItems = store.items.filter(todo => todo.id !== action.payload)

      store.items= decreseasedItems
    },
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
})

export default todos 