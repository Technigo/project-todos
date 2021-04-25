import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
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
      makeAllDone: (store) => {
        const allDone = store.items.map((item) => {
          return {
            ...item,
            isComplete: true
          }
        })
        store.items = allDone
      },
      resetAll: (store) => {
        const unDone = store.items.map((item) => {
          return {
            ...item,
            isComplete: false
          }
        })
        store.items = unDone
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