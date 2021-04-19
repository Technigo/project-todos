import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos', 
  initialState, 
  reducers: {
     saveTodo: (state, action) => {
          state.items.push(action.payload)
     },
      toggleComplete: (store, action) => {
        const updatedItems = store.items.map((todo) => {
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
      }
  }
}) 

export default todos