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
      text: "Celebrate 🥳"
    }
  ]
}

// Action contains payload

export const todos = createSlice({
  name: "todos", 
  initialState,
  reducers: {
    // Every action will contain the state and action. removeOne is an action. 'state' represents the 'todo' object. 

    // >>> DELETE TODO <<<
    deleteTodo: (state, action) => {
      // The action.payload is WHATEVER WE SEND IN to the function. Looking at the item.js file, we're sending in (props.index)
      // This defines the "index" variable as the PAYLOAD, which is the props.index. Breakthrough, yeeeah!
      const index = action.payload
      // Removes the item from the array
      state.items.splice(index, 1)
    },

    // >>> ADD TODO <<<
    addTodo: (state, action) => {
      // Define "newTask" as an object – not done, and with "text" as the payload (what's being sent in to the function).
      const newTask = {
        isDone: false, 
        text: action.payload
      }
      console.log(action.payload)
      state.items.push(newTask)
    },

    // >>> REMOVE COMPLETED <<<
    removeCompleted: (state, action) => {
      console.log(action.payload)
      // Filter the list and return only what's "not done".
      state.items = state.items.filter(item => item.isDone === false)
    },

    // >>> ADD RANDOM TODO <<<
    addRandomTodo: (state, action) => {
      console.log("Add random todo")
            // Define "newTask" as an object – not done, and with "text" as the payload (what's being sent in to the function).
            const newTask = {
              isDone: false, 
              text: action.payload
            }
            console.log(action.payload)
            state.items.push(newTask)
    },

    // >>> TOGGLE IS-DONE <<<
    toggleDone: (state, action) => {
      const index = action.payload.index
      const isDone = action.payload.isDone
      console.log("Inside the 'Toggle isDone' function")
      
      // Point to the state and set the isDone property to "true"

      if (state.items[index].isDone === true) {
        state.items[index].isDone = false
      } else {
        state.items[index].isDone = true
      }
      
      
    }
  }
})