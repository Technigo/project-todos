/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: '01',
        task: 'Eat some food',
        isDone: false
      }, {
        id: '02',
        task: 'Have a nap',
        isDone: false
      }, {
        id: '03',
        task: 'Eat some more',
        isDone: false
      }, {
        id: '04',
        task: 'Another nap',
        isDone: false
      }, {
        id: '05',
        task: 'Play with yarn',
        isDone: false
      }
    ]
  },
  reducers: {
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id === action.payload.id)
    }
  }
})