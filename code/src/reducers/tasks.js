import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, text: 'Create a store', complete: true },
    { id: 2, text: 'Create components', complete: false },
    { id: 3, text: 'Mobile first', complete: false },
    { id: 4, text: 'Buy Pepsi Max', complete: true }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (state, action) => {
      //const {text, category, dueDate} = action.payload
      // state.tasks.push({name, category, dueDate})
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      console.log(action.payload);
      // takes the items array and filters all items with id that is not equal to payload.
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    toggleCompleteStatus: (state, action) => {

      const choosenTask = state.items.find(item => item.id === action.payload)

      if (choosenTask) {
        choosenTask.complete = !choosenTask.complete; 
      };



    },
    removeAll: (state, action) => {
      state.items = []
    }
  }
})
