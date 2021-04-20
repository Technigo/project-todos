import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, description: 'Watch JavaScript videos', isComplete: false },
      { id: 2, description: 'Watch JavaScript videos', isComplete: false },
      { id: 3, description: 'Watch JavaScript videos', isComplete: true },
    ]

  },
  reducers: {
    toggleChecked: (store, action) => {
      console.log(action.payload)
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
      
    }
  }

})

export default todo