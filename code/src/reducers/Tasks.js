import { createSlice } from "@reduxjs/toolkit";


const data = [
  {
    id: 'grgre',
    task: 'Do codealong',
    isDone: false
  },
  {
    id: 'kuku',
    task: 'Build the project',
    isDone: false
  }
]

const tasks = createSlice( {
  name: 'todos',
  initialState: {
    items: data
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach(item => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addTask: (store, action) => {
      store.items.push(action.payload);
    },
},
})

export default tasks;