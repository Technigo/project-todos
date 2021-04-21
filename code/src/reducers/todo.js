import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: []

  },
  reducers: {
    toggleChecked: (store, action) => {
      const updatedItems = store.items.map( item => {
        if(item.id === action.payload) {
          return {
            ...item,
            isComplete: !item.isComplete
          } 
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter(item => item.id !== action.payload ) 
    },
    addItem: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }

})

export default todo