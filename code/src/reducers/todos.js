import { createSlice } from "@reduxjs/toolkit";



const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    addTask: (store, action) => {
      console.log(action, 'action')
      store.items.push(action.payload)
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    }
  }
  
});

export default todos;