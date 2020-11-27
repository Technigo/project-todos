import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({

 
    name: "tasks",
    initialState: {
    items: [],
      // {
      //   id: 1,
      //   text: 'Write an article', 
      //   done: false   
      // },
      // {
      //   id: 2,
      //   text: 'Add styled components',
      //   done: false 
        
      // },
      // {
      //   id: 3,
      //   text: 'Send in report', 
      //   done: false 
      // },
      // {  
      //   id: 4, 
      //   text: 'Exercise',
      //   done: false     
      // },
   
  },
 
    reducers: {
      addTask:(state, action) =>{
        const { text } = action.payload
        state.items.push({
        id:  Date.now(), /* To just get a specific id when adding new tasks */
        text, 
        complete: false,
        })
        
      },
      removeTask: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload)
      },

      removeAll: (state) => {
        state.items = []
      },
    }
})

 // setDone: (state, action) => {
      //   const {index} = action.payload
      //   state.items[index].done = done
      // }