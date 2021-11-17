import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

const initialState = {
  items: [],
}
const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false
      }

      store.items = [...store.items, newTodo]
    },
    // check todo as complete
  toggleTodo: (store, action) => {
    const updatedItems = store.items.map((item) => {
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
   // action to complete all 
   completeAll: (store) => {
    store.items.map(item => item.isComplete = true)
  },
    clear: () => {
    return initialState
  },

  // delete todos
  deleteTodo: (store, action) => {
    const decreasedItems = store.items.filter(
      (item) => item.id !== action.payload
    )
    store.items = decreasedItems
  }
  },
  
})

export default todos