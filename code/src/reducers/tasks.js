import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"

const initialState = {
  items: [
    {
      id: 1,
      name: "create to-do-app",
      checkedTask: true,
      createdAt: "2020-01-14T19:43:21.337Z",
    },
    {
      id: 2,
      name: "drink coffee",
      checkedTask: false,
      createdAt: "2020-01-20T10:15:41.525Z",
    },

  ]
}

export const tasks = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    //Here we will add actions
    //Would make sense if this heading was actions instead lol

    addTask: (state, action) => {
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
      //find the right task and toggle the value of checkedTask
      const checkedItem = state.items.find((item) => item.id === action.payload)

      if (checkedItem) {
        checkedItem.checkedTask = !checkedItem.checkedTask
        //Toggle: if it's true, set to false and vice versa
      }
    }
  }
})
