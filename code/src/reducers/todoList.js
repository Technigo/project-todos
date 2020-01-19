import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todoList',
  initialState: {
    items: [
      { id: 1, name: 'Make function', taskDone: false},
      { id: 2, name: 'Check out', taskDone: true}
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },

    toggleTaskDone: (state, action) =>{
      console.log(action.payload)
     
     const foundItem = state.items.find((item) => item.id === action.payload)

     if (foundItem) {
       foundItem.taskDone = !foundItem.taskDone
     }
    }
  }
})