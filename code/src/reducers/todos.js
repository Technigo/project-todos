import { createSlice } from "@reduxjs/toolkit"
// here we create a slice that consists of name, initialstate and reducer and proporties 

const data = [
  {
      id: '12345',
      name: 'Charmander',
      completed: false
  },
  {
      id: '54321',
      name: 'Bulbasaur',
      completed: false
  }
]

const todos = createSlice({
  name: "todos",
  initialState: {
    items: data
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.forEach((item) =>{
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    }
  },
})

export default todos
