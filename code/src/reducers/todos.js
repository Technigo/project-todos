// This is our reducer. 

import { createSlice } from "@reduxjs/toolkit"

// Initial state of the object. Think about how you wanna do this.
const initialState = {
  items: [
    {
      isDone: true, 
      text: "Download app"
    },
    {
      isDone: false, 
      text: "Mark something as 'done'"
    },
    {
      isDone: false, 
      text: "Delete a task"
    },
    {
      isDone: true, 
      text: "Read this text"
    },
    {
      isDone: false, 
      text: "Add a new task"
    },
    {
      isDone: false, 
      text: "Celebrate"
    }
  ]
}

// Action contains payload

export const todos = createSlice({
  name: "todos", 
  initialState,
  reducers: {
    // Every action will contain the state and action. removeOne is an action. 'state' represents the 'todo' object. 
    // REMOVE THE LATEST
    removeOne: (state, action) => {
      console.log("remove one")
    },

    // DELETE TASK
    deleteTask: (state, action) => {
      // The action.payload is WHATEVER WE SEND IN to the function. Looking at the item.js file, we're sending in (props.index)
      // This defines the "index" variable as the PAYLOAD, which is the props.index. Breakthrough, yeeeah!
      const index = action.payload
      // We have the index, now we need to remove it. From the state.
      
      // Removes the item from the array
      state.items.splice(index, 1);

      

    },

    // TOGGLE IS-DONE
    toggleDone: (state, action) => {
      console.log("Toggle 'is done'")
    }
  }
})