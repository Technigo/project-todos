import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      // à enlever plus tard
      { id: 1, text: 'Faire mon projet', completed: false },
      { id: 2, text: 'Lire', completed: true },
      { id: 3, text: 'Manger', completed: true },
      { id: 4, text: 'Dormir', completed: false },
    ]
  },
  reducers: {
    addTodo: (state, action) => {

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        completed: false
      }

      state.items = [...state.items, newTodo]
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },

    // no clue for now how to do it...
    toggleTodo: (state, action) => {
      if (state.items.find((item) => item.completed)) {
        console.log('this item is completed')
      } else if (state.items.find((item) => !item.completed)) {
        console.log('this item is NOT completed')
      }


      // state.completed = !state.completed
      // state.items.find((item) => item.completed === !item.completed)
      // state.items.find((item) => item.completed === action.payload.completed)
      // state.items.push({ ...action.payload, completed: true })
    }

  }
})