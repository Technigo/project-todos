import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allTodoTasks: []
  //more categories can be added as keys (dueDate, category ...)
  // {
  //   id: 1,
  //   text: 'Watch video on actions & reducers',
  //   complete: false
  // },
  // {
  //   id: 2,
  //   text: 'Follow redux codealong',
  //   complete: false
  // },
  // {
  //   id: 3,
  //   text: 'Fork weekly assignment',
  //   complete: true
  // },
  // {
  //   id: 4,
  //   text: 'Create a todo app',
  //   complete: false
  // }
}


export const todoTasks = createSlice({

  //name of the slice
  name: "todoTasks",
  initialState,
  reducers: {

    //adds a task to allTodoTasks array
    addTask: (store, action) => {
      console.log(`Track action.payload: ${action}`)

      // --- MAKSY APPROACH ---
      //initial state of every new task
      const newTodo = {
        //returns an array of numbers - max amount of ids (= length of the array)
        //+1 is for the new item, not in the array yet
        //...state -> spreading array into Math.max
        id: Math.max(...store.allTodoTasks.map(task => task.id)) + 1,
        text: action.payload,
        complete: false
      }

      //adding new object to an existing array of objects 
      const newTodoList = [...store.allTodoTasks, newTodo]

      store.allTodoTasks = newTodoList

    },

    removeTask: (store, action) => {

      //id of the removed task
      const id = action.payload;
      console.log(`Id: ${id}`)

      //finds id of a removed task in an array of all tasks
      const tasks = store.allTodoTasks.find(task => task.id === id)
      //MAKSY way
      //const tasks = state.allTodoTasks.filter(task => task.id !== id)

      //removes the object (task) with an id of the removed task in an array of tasks
      store.allTodoTasks.splice(store.allTodoTasks.indexOf(tasks), 1);
      //MAKSY way
      //state.allTodoTasks = tasks
    },

    toggleComplete: (store, action) => {
      console.log(`Checked task's id: ${action.payload}`)
      console.log(`Type: ${action.type}`)

      //find a checked task
      const taskChecked = store.allTodoTasks.find((task) => task.id === action.payload)
      console.log(`print taskChecked: ${taskChecked.text}`)

      //toggle between true/false from the key *complete*
      if (taskChecked) {
        taskChecked.complete = !taskChecked.complete
      }
    }
  }

}) 