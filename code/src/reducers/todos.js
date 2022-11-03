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
      const { input, dueDate } = action.payload
      const userId = uuidv4();
      const dueDateFormatted = dueDate.toLocaleString()

      const newTask = {
        text: input,
        id: userId,
        complete: false,
        postedTime: moment().format('ddd D MMM'),
        dueDate: dueDateFormatted
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

    // This changes duedate
    changeTaskDueDate: (store, action) => {
      const { taskId, dueDate } = action.payload
      console.log(action.payload)
      const changedTask = store.tasks.find((t) => t.id === taskId)
      changedTask.dueDate = dueDate
    },

    // This deletes all tasks
    clearAll: (store) => {
      const emptyList = [];
      store.tasks = emptyList
      store.isEmpty = true
    }
  }
})