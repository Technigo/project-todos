import { createSlice } from '@reduxjs/toolkit'

// have to have: name, initial state, list of actions
const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((task) => {
        if (task.id === action.payload) {
          const updatedItem = {
            ...task,
            isComplete: !task.isComplete
          }
          return updatedItem
        } else {
          return task
        }
      })
      store.items = updatedItems
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
      //const { id, description, isComplete } = action.payload
      //store.items = [{ id, description, isComplete }, ...store.items]
      //store.items.push(action.payload) //Mutabilityversion
    },
    removeTask: (store, action) => {
      store.items = store.items.filter((task) => task.id !== action.payload) //immutability version
      //store.items.splice(action.payload, 1) //Mutability version
    },
    clearAll: (store, action) => {
      store.items = []
    }
  }
})

// one thing to export use default export
export default tasks
