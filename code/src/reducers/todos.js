import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        title: 'todo-list',
        items: [
        { text: 'Watch video on actions & reducers', 
          complete: true },
/* 
        { text: 'Follow redux codealong', 
          complete: true },

        { text: 'Fork weekly assignment',
          complete: true },

        { text: 'Create a todo app', 
          complete: false }, */
      ]
    },
    reducers: {
        //state here is the objects inside the todos
        removeOne: (state, action) => {
            state.items.pop() 
        },
        
        addOne: (state, action) => {
          const itemInfo = action.payload;
          state.items.push(itemInfo)
        }
    },

})

