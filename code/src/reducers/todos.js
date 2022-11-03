import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Do laundry',
        isDone: false,
        urgency: 'red'
      },
      {
        id: 2,
        name: 'Make dinner',
        isDone: false,
        urgency: 'green'
      },
      {
        id: 3,
        name: 'Say hello to Patrick',
        isDone: false,
        urgency: 'orange'
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    addToDo: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.push(action.payload)
    },
    removeToDo: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    removeAllToDos: (store, action) => {
      store.items.splice(action.payload)
    }
  }
})

export default todos