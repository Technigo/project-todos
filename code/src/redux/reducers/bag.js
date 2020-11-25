import { createSlice } from '@reduxjs/toolkit'

export const bag = createSlice({
  name: 'bag',
  initialState: {
    items: [
      { id: 1, name: 'Handduk', inBag: false },
      { id: 2, name: 'Tandborste', inBag: false },
      { id: 3, name: 'Tvål', inBag: false },
    ]
  },
  reducers: {
    addThings: (state, action) => {
      const { name } = action.payload
      state.items.push({ name })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    tooglePacked: (state, action) => {
      const foundThing = state.items.find((item) => item.id === action.payload)
      console.log(action.payload)
      if (foundThing) {
        foundThing.inBag = !foundThing.inBag
      }

    }
    //removeAll: (state) => {
      //state.items = []
   //}
  }
})