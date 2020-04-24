import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name:"Test List",
    items: [
      {
        description: "Coading!",
        done: false
      }
    ]
  }
}

export const todolist = createSlice ({
  name: "todolist",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload
      state.list.items.push(itemInfo)
    },
    setDone: (state, action) => {
      const { itemIndex, done } =action.payload
      state.list.items[itemIndex].done = done

    },
    remove: (state, action) => {
      const { itemIndex } =action.payload
      state.list.items = state.list.items.filter((item, index) => index !== itemIndex )
    }


  }
})

