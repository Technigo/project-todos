import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, description: 'Test one', isComplete: false },
      { id: 2, description: 'Test two', isComplete: false },
      { id: 3, description: 'Test three', isComplete: false }
    ]
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
    }
  }
})

export default todos 