import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Make dinner reservation for the 14th',
        isDone: false,
        urgency: 'green'
      },
      {
        id: 2,
        name: 'Buy dog food',
        isDone: false,
        urgency: 'orange'
      },
      {
        id: 3,
        name: 'Watch Redux code-along',
        isDone: false,
        urgency: 'red'
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
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