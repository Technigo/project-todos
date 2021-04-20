import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, description: 'Watch JavaScript videos', isComplete: false },
      { id: 2, description: 'Learn JavaScript', isComplete: false },
      { id: 3, description: 'Train your brain', isComplete: true },
    ]

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
      store.items.push({...action.payload})
    }
  }

})

export default todo