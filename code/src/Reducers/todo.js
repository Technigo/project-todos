import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice ({
  name: 'todo',
    initialState: {
      items: [
        { id: 1, text: 'Eat', isComplete: false },
        { id: 2, text: 'Sleep', isComplete: false },
        { id: 3, text: 'Yoga', isComplete: false },
        { id: 4, text: 'Repeat', isComplete: true },
      ],
  },
  reducers: {
    // Add tasks in the TaskInput
    addItem: (store, action) => {
      const newItem = {
        id: Math.max(...store.items.map(item => item.id)) +1,
        text: action.payload,
        isComplete: false
      }
      const newItemList = [...store.items, newItem]
      store.items = newItemList
    },

    setComplete: (state, action) => {
      const foundItem = state.items.find(item => item.id === action.payload)
      //console.log(action.payload)
      //console.log(`innan if ${foundItem}`)
      if(foundItem) {
        foundItem.isComplete = !foundItem.isComplete
      }
      //console.log(`efter if ${foundItem}`)
    },

    // Removes one item in the list
    removeItem: (store, action) => {
      const {id} = action.payload
      store.items = store.items.filter((item) => item.id !== id)
      console.log(store, action)
      
    },
    // Removes all the tasks
    removeAll: (store, action) => {
      store.items = []
    }, 
  }
})


