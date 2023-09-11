/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: '01',
        task: 'Pick up parcel',
        isDone: false
      }, {
        id: '02',
        task: 'Get groceries',
        isDone: false
      }, {
        id: '03',
        task: 'Cook dinner',
        isDone: false
      }, {
        id: '04',
        task: 'Make Tiktok',
        isDone: false
      }, {
        id: '05',
        task: 'Plan outfits',
        isDone: false
      }
    ]
  },
  reducers: {
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    },
    completeTodo: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    }
  }
})