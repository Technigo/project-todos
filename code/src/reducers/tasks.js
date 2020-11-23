import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice ({
  name: 'tasks',
  initialState: [
    { id: 1, text:'Watch video on actions & reducers', complete: true },
    { id: 2, text:'Follow redux codealong', complete: true },
    { id: 3, text:'Fork weekly assignment', complete: true },
    { id: 4, text:'Create a todo app', complete: false}
  ],
  reducers: {
    addItem: (state, action) => {
      const taskToAdd = action.payload 
      console.log(taskToAdd)

      const newState = state 

      const newItem = {
        id: state.length + 1,
        text: taskToAdd.task, 
        complete: false
      }
      newState.push(newItem)

      return newState
    }
  }

})
