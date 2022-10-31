/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'Watch video on actions & reducers', complete: false },
  { id: 2, text: 'Follow redux codealong', complete: false },
  { id: 3, text: 'Fork weekly assignment', complete: false },
  { id: 4, text: 'Create a todo app', complete: false }
]

const initialState = {
  tasks,
  isEmpty: true
  // more items
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    // this adds a new task to the list
    addNewTask: (store, action) => {
      const { taskId, taskIndex } = action.payload
      const task = store.tasks.find((t) => t.id === taskId)

      store.tasks.push({
        taskId,
        taskIndex,
        task,
        taskText: store.tasks.text[taskIndex],
        complete: store.tasks.complete
      })
    },

    /*  This action shows if your answer is correct or not
    and display which button is actually correct. */

    checkComplete: (store, action) => {
      const { taskId } = action.payload
      const task = store.tasks.find((t) => t.id === taskId)

      const setToComplete = () => {
        const allCompletedTasks = document.getElementsByClassName('finished')
        const color = '#7FB77E'
        for (let i = 0; i < allCompletedTasks.length; i++) {
          allCompletedTasks[i].complete = true;
          allCompletedTasks[i].style.background = color;
        }
      }

      if (task) {
        setToComplete()
      }
    },

    // This action clears all tasks
    clearAll: () => {
      return initialState
    }
  }
})