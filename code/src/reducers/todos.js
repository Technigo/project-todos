import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        title: 'todo-list',
        items: [
        { id: 1,
          text: 'Watch video on actions & reducers', 
          complete: false },

        { id: 2,
          text: 'Fork weekly assignment', 
          complete: false },

        { id: 3,
          text: 'Create a todo app',
          complete: false },
      ]
    },
    reducers: {
        //state here is the objects inside the todos
        removeOne: (state, action) => {
          const itemId = action.payload;
          const filteredList = state.items.filter(item => item.id !== itemId)
          state.items = filteredList;
        },
        
        addOne: (state, action) => {
          const itemInfo = action.payload;
          state.items.push(itemInfo)
        },

        clearAll: (state, action) => {
          state.items = []
        },

        toggleComplete: (state, action) => {
          const foundItem = state.items.find((item) => item.id === action.payload)
            if (foundItem) {
          foundItem.complete = ! foundItem.complete          
        }
      }
    }     
})

