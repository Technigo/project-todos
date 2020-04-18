import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: "Test list",
    items: [
      {
        description: "This is a test todo",
        done: false
      }
    ]
  } 
}


export const tasks = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {

     // Will add a todo item to the state list
    addTodo:(state, action) => {
      const { itemInfo } = action.payload
      state.list.items.push(itemInfo)
    },

    // Will set a specific item to done using the index
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },
    // Will remove an item from the list
    removeTodo: (state, action) => {
      const { itemIndex} = action.payload
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      )
    }
  }
})
// Reducers needed:
// addTask
// removeTask
// setDone
// option: rensa listan?