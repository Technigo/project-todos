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

    // This action sets a task to complete
    checkComplete: (store, action) => {
      const { taskId } = action.payload
      store.tasks.forEach((t) => {
        if (t.id === taskId) {
          t.complete = !t.complete
        }
      });
    },

    // This deletes a task */
    deletingTask: (store, action) => {
      const { taskId } = action.payload
      const filteredList = store.tasks.filter((t) => t.id !== taskId)
      store.tasks = filteredList
      if (store.tasks.length === 0) {
        store.isEmpty = true
      }
    },

    // This checks all uncompleted tasks to complete
    setComplete: (store) => {
      const unComplete = store.tasks.filter((t) => t.complete === false)
      unComplete.forEach((task) => {
        task.complete = true
      })
    },

    // This deletes all tasks
    clearAll: (store) => {
      const emptyList = [];
      store.tasks = emptyList
      store.isEmpty = true
    }
  }
})