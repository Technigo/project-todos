import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: {
      items: [
        { id: 1,text: 'Wake up', completedTask: false, AddedDate:1606383658465},
        { id: 2, text: 'Kick ass', completedTask: false,AddedDate:1606383658465 },
        { id: 3, text: 'Repeat', completedTask: false, AddedDate:1606383658465 },
      ],
    },
    reducers: {
      addItem: (state, action) => {
        const { text } = action.payload
        state.items.push({ id:Date.now(), text, Date: Date.now() })
        },
      removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
      },
    
      removeAll: (state) => {
        state.items = []
      },
      toggleCompleted: (state, action) => {
        const foundItem = state.items.find((item) => item.id === action.payload)
        console.log( action)
          if (foundItem) {
              foundItem.completedTask = ! foundItem.completedTask
          }
      },
    },
})
