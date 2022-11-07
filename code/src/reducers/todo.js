/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 'sampleid123',
        text: 'Eat aaall the cake',
        isDone: false },
      { id: 'sampleid123isarhyme',
        text: 'Water plants 🌱',
        isDone: true },
      { id: 'sampleid123isarhymeindeed',
        text: 'Bake a cake',
        isDone: true }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      // console.log(store)
      // console.log(action)
      //   v- unreadable old school ver of the for each loop below it that does the exact same thing except better and is also actually readable
      //   store.items.find((item) => item.id === action.payload).isCaught = !store.items.find((item) => item.id === action.payload).isCaught
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteItem: (store, action) => {
      // unshift does what comapred to splice here?
      store.items.splice(action.payload, 1)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  }
})

export default todos