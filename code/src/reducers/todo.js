/* eslint-disable jsx-a11y/label-has-associated-control */
import { createSlice } from '@reduxjs/toolkit'

const data = [
  {
    id: 0,
    name: 'Skydive',
    done: false
  },
  {
    id: 1,
    name: 'Travel',
    done: false

  }
]

const todos = createSlice({
  name: 'todo',
  initialState: {
    items: data
  },

  reducers: {
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
        }
      })
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addTask: (store, action) => {
      store.items.push(action.payload)
    }
  }
})

export default todos;