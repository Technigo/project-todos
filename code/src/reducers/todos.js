import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: localStorage.getItem('todos')
          ? JSON.parse(localStorage.getItem('todos'))
          : []
}

const todos = createSlice({
  name: 'todos', 
  initialState, 
  reducers: {
      addTodo: (store, action) => {
        store.items = [...store.items, action.payload]
      },
      removeTodo: (store, action) => {
        const decreaseItems = store.items.filter(item => item.id !== action.payload)
        store.items = decreaseItems
      },
      removeComplete: (store) => {
        const decreaseComplete = store.items.filter((complete) => complete.isComplete === false) 
        store.items =  decreaseComplete
      },
      removeAll: (store) => {
        store.items = []
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