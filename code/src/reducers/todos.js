/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    isEmpty: true
  },
  reducers: {

    // this adds a new task to the list
    addNewTask: (store, action) => {
      const newTask = {
        text: action.payload,
        id: Math.random(),
        complete: false
        // postedTime: moment().format("ddd D MMM"),
      }

      store.tasks = [...store.tasks, newTask];
      store.isEmpty = false
    },

    /*  This action sets a task to complete */

    checkComplete: (store, action) => {
      console.log(action)
      const { taskId } = action.payload
      store.tasks.find((t) => t.id === taskId).complete = !store.tasks.find((t) => t.id === taskId).complete
      // store.tasks.forEach((t) => {
      //   if (taskId === t.id) {
      //     taskId.complete = !taskId.complete
      //   }
      // });
    },

    // This action clears all tasks
    clearAll: (store) => {
      const emptyList = [];
      store.tasks = emptyList
    }
  }
})

export default todos;