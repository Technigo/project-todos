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
      console.log(state.items[1]);


      state.items = state.items.filter(item => item.id !== action.payload)


      //const removedTask = state.tasks.tasks.find((task) => task.id === action.payload.task.task.id)
      // console.log(removedTask)

    },
    toggleCompleteStatus: (state, action) => {

    },
    removeAll: (state, action) => {
      state.items = []
    }
  }
})
