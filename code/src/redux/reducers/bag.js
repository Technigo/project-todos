import { createSlice } from '@reduxjs/toolkit'

export const bag = createSlice({
  name: 'bag',
  initialState: {
    items: [
      //{ id: 1, name: 'Handduk', inBag: false },
      //{ id: 2, name: 'Tandborste', inBag: false },
      //{ id: 3, name: 'Tvål', inBag: false },
    ]
  },
  reducers: {
    addThings: (state, action) => {
        const newItem = {  
        id: Math.random(...state.items.map((item)=>item.id)),       
        name: action.payload,
        inBag: false
        }
        const newList = [...state.items, newItem]
        state.items = newList;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    tooglePacked: (state, action) => {
      const foundThing = state.items.find((item) => item.id === action.payload)
  
      if (foundThing) {
        foundThing.inBag = !foundThing.inBag
      }
    },
    showTheBag: (state, action) => {
      state.items = state.items.filter((item) => item === action.payload)
    }
    
    //removeAll: (state) => {
      //state.items = []
   //}
  }
})