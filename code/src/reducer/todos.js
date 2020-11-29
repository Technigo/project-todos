import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid"

const initialState = {
  allTodoTasks: []
}

export const todoTasks = createSlice({

  //name of the slice
  name: "todos",
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

      //finds an id of a removed task
      const taskId = store.allTodoTasks.find(task => task.id === id)

      //removes the object (task) with the correct id
      store.allTodoTasks.splice(store.allTodoTasks.indexOf(taskId), 1);
    },

    toggleComplete: (store, action) => {

      //find a checked task
      const taskChecked = store.allTodoTasks.find(task => task.id === action.payload)

      //toggle between true/false from the key *complete*
      //if find() returns sth else than null, the if statement will execute
      if (taskChecked) {
        taskChecked.complete = !taskChecked.complete
      }
    },
  }
}) 