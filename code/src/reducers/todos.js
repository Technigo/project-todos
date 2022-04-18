import { createSlice } from "@reduxjs/toolkit"

const data = [
  {
    id: "12345",
    name: "Charmander",
    completed: false,
  },
  {
    id: "54321",
    name: "Bulbasaur",
    completed: false,
  },
]

const todos = createSlice({
  name: "todos",
  initialState: {
    items: data,
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        } 
      })
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  },
})

export default todos

/* let item = store.items.find(x => x.id === action.payload)
      if(item)
      {
        item.completed = !item.completed
      } */
