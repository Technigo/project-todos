// import React from "react"
import { createSlice } from "@reduxjs/toolkit"

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 1, name: "test item 1", checkedTask: false },
      { id: 2, name: "test item 2", checkedTask: false },
      { id: 3, name: "test item 3", checkedTask: false },
    ],
    // noOfTasks: 0,
    noOfUncompletedTasks: 0
  },
  reducers: {
    //Here we will add actions
    //Would make sense if this heading was actions instead

    addTask: (state, action) => {
      console.log("current state", state)
      console.log("action", action)
      state.items.push({ id: Date.now(), name: action.payload })
    },
    removeTask: (state, action) => {
      //find the right task and remove it
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // countTasks: (state) => {
    //   return (state.items.length)
    // },

    countUncompletedTasks: (state, action) => {
      state.noOfUncompletedTasks()
    },

    toggleCheckedTask: (state, action) => {
      console.log(action)
      //find the right task and toggle the value of checkedTask
      const checked = state.items.find((item) => item.id === action.payload)
      if (checked) {
        checked.checkedTask = !checked.checkedTask
        //Toggle: if it's true, set to false and vice versa
      }
    }


  }
})