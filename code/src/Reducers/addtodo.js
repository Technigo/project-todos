import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name:"Task list",
    items: [
      {
        description: "Whatsapp?",
        done: false
      }
    ]
  }
}


export const addtodo = createSlice ({
  name:"addtodo",
  initialState: initialState,
  reducers: {
    addTodos: (state,action) => {
      const { itemInfo } = action.payload
      state.list.items.push(itemInfo)
    },
    setDone: (state,action) =>{
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    }

  }
})
