import { createSlice } from "@reduxjs/toolkit"

// const allTodoTasks = [
//   //more categories can be added as keys (dueDate, category ...)
//   { id: 1, text: 'Watch video on actions & reducers', complete: false },
//   { id: 2, text: 'Follow redux codealong', complete: false },
//   { id: 3, text: 'Fork weekly assignment', complete: true },
//   { id: 4, text: 'Create a todo app', complete: false },
// ]

const initialState = {
  allTodoTasks: [
    //more categories can be added as keys (dueDate, category ...)
    {
      id: 1,
      text: 'Watch video on actions & reducers',
      complete: false
    },
    {
      id: 2,
      text: 'Follow redux codealong',
      complete: false
    },
    {
      id: 3,
      text: 'Fork weekly assignment',
      complete: true
    },
    {
      id: 4,
      text: 'Create a todo app',
      complete: false
    }
  ]
}



export const todoTasks = createSlice({

  //name of the slice
  name: "todoTasks",
  initialState,
  reducers: {
    toggleComplete: (state, action) => {
      console.log(`Checked task's id: ${action.payload}`)
      console.log(`Type: ${action.type}`)

      //find a checked task
      //NOT WORKING AS EXPECTED ...
      const taskChecked = state.allTodoTasks.find((task) => task.id === action.payload)
      console.log(`print taskChecked: ${taskChecked.text}`)

      //toggle between true/false from the key *complete*
      if (taskChecked) {
        taskChecked.complete = !taskChecked.complete
      }
    },
    //adds a task to allTodoTasks array
    // addTask: (store) => {}

    //removes the task from all todos
    //TODO:
    //create a remove button
    removeTask: (state, action) => {
      state.initialState.filter((task) => task.id !== action.payload)
    }
  }

}) 