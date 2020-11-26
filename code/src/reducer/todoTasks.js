import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

const initialState = {
  allTodoTasks: []
}

export const todoTasks = createSlice({

  //name of the slice
  name: "todoTasks",
  initialState,
  reducers: {

    //adds a task to allTodoTasks array
    addTask: (store, action) => {

      //initial state of every new task
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        complete: false
      }

      //adding new task (object) to an existing array of tasks (objects) 
      const newTodoList = [...store.allTodoTasks, newTodo]

      store.allTodoTasks = newTodoList

    },

    removeTask: (store, action) => {

      //id of the removed task
      const id = action.payload;
      console.log(`what is here: ${id}`)

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
    },

    // countTasks: (store, action) => {
    //   const
    // }
  }

}) 