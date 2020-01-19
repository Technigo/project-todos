// import React from "react"
import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"

const initialState = {
  items: [
    {
      id: 1,
      name: "task 1",
      checkedTask: false,
      createdAt: "2020-01-16T08:08:25.289Z",
    },
    {
      id: 2,
      name: "task 2",
      checkedTask: false,
      createdAt: "2020-01-10T13:27:12.408Z",
    },
    {
      id: 3,
      name: "task 3",
      checkedTask: false,
      createdAt: "2020-01-09T14:23:41.196Z"
    },
  ]
}

export const tasks = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    //Here we will add actions
    //Would make sense if this heading was actions instead

    addTask: (state, action) => {
      console.log("current state", state)
      console.log("action", action)

      state.items.push({ id: Date.now(), name: action.payload, createdAt: moment() })
    },
    removeTask: (state, action) => {
      //find the right task and remove it
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state) => {
      state.items = []
    },

    toggleCheckedTask: (state, action) => {
      console.log(action)
      //find the right task and toggle the value of checkedTask
      const checkedItem = state.items.find((item) => item.id === action.payload)

      if (checkedItem) {
        checkedItem.checkedTask = !checkedItem.checkedTask
        //Toggle: if it's true, set to false and vice versa
      }
    }


  }
})