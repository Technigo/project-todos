import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name:"Task list",
    items: [
      { id: 1, description: 'Breath in', done: false },
      { id: 2, description: 'Breath out', done: true },
      { id: 3, description: 'Dont worry', done: true },
      { id: 4, description: 'Be happy', done: false }
    
    ]
  }
}


export const todos = createSlice ({
  name:"addtodo",
  initialState: initialState,
  reducers: {
    addTodos: (state, action) => {
      const { itemInfo } = action.payload
      state.list.items.push(itemInfo)
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      )
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    }

  }
})
