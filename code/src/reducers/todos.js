import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    /* the new ToDo gets added to the beginning of the items array, so that it shows up highest in the list */
    addToDo: (state, action) => {
      state.items.unshift({
        id: uniqid(),
        task: action.payload.input,
        isComplete: false,
        newDate: new Date(),
        category: action.payload.category || 'Other'
      })
    },
    /* this function deletes an element from the items array */
    removeToDo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    /* This function toggles the ToDo between being completed/ not completed. It also serves for sorting all completed ToDos to the end of the array */
    toggleIsComplete: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      task.isComplete = !task.isComplete
      state.items = state.items.sort((a,b) => a.isComplete - b.isComplete)
    },
    /* This function empties the items array */
    completeAll: (state) => {
      state.items = []
    },
  }
})

export default todos