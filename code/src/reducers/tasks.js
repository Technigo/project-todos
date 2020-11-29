import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({

 
    name: "tasks",
    initialState: {
    items: [],
     
   
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
     
      removeAll: (state) => {
        state.items = []
      },

      removeChecked: (state) => {
        const filteredList = state.items.filter((item) => !item.complete);
        state.items = filteredList
      },

      removeTask: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
      },
      
      setChecked: (state, action) => {
        const matchTask = state.items.find((item) => item.id === action.payload)
      
             if (matchTask) {
              matchTask.complete = !matchTask.complete
        };
      },
    }
})

 // setDone: (state, action) => {
      //   const {index} = action.payload
      //   state.items[index].done = done
      // }