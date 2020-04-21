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

// const tasks = [
//       { id: 1, text: 'Work on ToDo', complete: true },
//       { id: 2, text: 'Have fun', complete: false },
//       { id: 3, text: 'Eat a burger', complete: false },
//       { id: 4, text: 'Hug my best beetle', complete: false }
// ]



export const tasklist = createSlice({
  name: 'tasklist',
  initialState: {
    tasks: [
      { id: 1, text: 'Work on ToDo', complete: true },
      { id: 2, text: 'Have fun', complete: false },
      { id: 3, text: 'Eat a burger', complete: false },
      { id: 4, text: 'Hug my best beetle', complete: false }
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload, 
        complete: false
      })
    },
    toggleCheck: (state, action) => {
      
      console.log(action.payload)
      // const {id, complete} = action.payload
      // state.tasklist.[id].complete = complete

      const checkToDo = state.tasks.find((toDo) => toDo.id === action.payload)
      console.log('CheckToDo', checkToDo)
      

      if (checkToDo) {
        checkToDo.complete = !checkToDo.complete
      }

      // const { id, complete } = action.payload
      // state.tasklist.complete = complete
    }
  }
})