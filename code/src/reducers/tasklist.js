import { createSlice } from '@reduxjs/toolkit'

// const tasks = {
//   list: {
//     name: 'First list',
//     items: [
//       { id: 1, text: 'Work on ToDo', complete: true },
//       { id: 2, text: 'Have fun', complete: false },
//       { id: 3, text: 'Eat a burger', complete: true },
//       { id: 4, text: 'Hug my best beetle', complete: false }
//     ]
//   }
// }

const tasks = [
      { id: 1, text: 'Work on ToDo', complete: true },
      { id: 2, text: 'Have fun', complete: false },
      { id: 3, text: 'Eat a burger', complete: true },
      { id: 4, text: 'Hug my best beetle', complete: false }
]



export const tasklist = createSlice({
  name: 'tasklist',
  initialState: tasks,
  reducers: {
    addToDo: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload, 
        complete: false
      })
    }
  }
})