/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

const tasks = []

const initialState = {
  tasks,
  isEmpty: true
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    // this adds a new task to the list
    addNewTask: (store, action) => {
      const userId = uuidv4();

      const newTask = {
        text: action.payload,
        id: userId,
        complete: false,
        postedTime: moment().format('ddd D MMM')
      }

      store.tasks = [...store.tasks, newTask];
      store.isEmpty = false
    },

    /*  This action sets a task to complete */

    checkComplete: (store, action) => {
      const { taskId } = action.payload
      store.tasks.find((t) => t.id === taskId).complete = !store.tasks.find((t) => t.id === taskId).complete
      // store.tasks.forEach((t) => {
      //   if (taskId === t.id) {
      //     taskId.complete = !taskId.complete
      //   }
      // });
    },

    /* This action deletes a task */
    deletingTask: (store, action) => {
      const { taskId } = action.payload
      const filteredList = store.tasks.filter((t) => t.id !== taskId)
      store.tasks = filteredList
      console.log('filtered list', filteredList)
      if (store.tasks.length === 0) {
        store.isEmpty = true
      }
    },

    // This action clears all tasks
    clearAll: (store) => {
      const emptyList = [];
      store.tasks = emptyList
    }
  }
})
