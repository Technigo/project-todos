import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name:"removetodo",
    items: [
      {
        description: "Yoyoyo",
        done: false
      }
    ]
  }
}

export const setdone = createSlice ({
  name: "setdone",
  initialState: initialState,
  reducers: {
    setDone: (state,action) =>{
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    }
  }




})