import { createSlice } from "@reduxjs/toolkit"

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

// store =
// {
//   todoTasks: {
//     allTodoTasks: [
//       {
//         id: 1,
//         text: 'Watch video on actions & reducers',
//         complete: false
//       },
//       {
//         id: 2,
//         text: 'Follow redux codealong',
//         complete: false
//       },
//       {
//         id: 3,
//         text: 'Fork weekly assignment',
//         complete: false
//       },
//       {
//         id: 4,
//         text: 'Create a todo app',
//         complete: false
//       }
//     ]
//   }
// }

export const todoTasks = createSlice({

  //name of the slice
  name: "todoTasks",
  initialState,
  reducers: {
    toggleComplete: (state, action) => {
      console.log(`Checked task's id: ${action.payload}`)
      console.log(`Type: ${action.type}`)

      //find a checked task
      //WHY IS IT STORE.ALLTODOTASKS?
      const taskChecked = state.allTodoTasks.find((task) => task.id === action.payload)
      console.log(`print taskChecked: ${taskChecked.text}`)

      //toggle between true/false from the key *complete*
      if (taskChecked) {
        taskChecked.complete = !taskChecked.complete
      }
    },
    //adds a task to allTodoTasks array
    addTask: (state, action) => {
      const { id, text, complete } = action.payload
      const timeStamp = Date.now()
      console.log(`Time stamp: ${timeStamp}`)
      //write Date.now() instead of timeStamp if not working
      //WHY IS IT STORE.ALLTODOTASKS?
      state.allTodoTasks.push({ id, text, complete })
    },

    removeTask: (state, action) => {

      //id of the removed task
      const id = action.payload;
      console.log(`Id: ${id}`)

      //finds id of a removed task in an array of all tasks
      const tasks = state.allTodoTasks.find(task => task.id === id)

      //removes the object (task) with an id of the removed task in an array of tasks
      state.allTodoTasks.splice(state.allTodoTasks.indexOf(tasks), 1);
    }
  }

}) 