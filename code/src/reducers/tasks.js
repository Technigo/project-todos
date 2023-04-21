import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // {
    //   id: 1681904108559,
    //   task: 'Make a to do app',
    //   // label: 'School',
    //   due: 1681904108559,
    //   complete: false
    // }
    // {
    //   id: 1681904108560,
    //   task: 'Shower',
    //   // label: 'School',
    //   due: 1681904108560,
    //   complete: false
    // },
    // {
    //   id: 1681904108561,
    //   task: 'Meet mentor',
    //   // label: 'School',
    //   due: 1681904108561,
    //   complete: false
    // },
    // {
    //   id: 1681904108562,
    //   task: 'Demo design project',
    //   // label: 'School',
    //   due: 1681904108562,
    //   complete: false
    // }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },

    deleteTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    },

    toggleComplete: (store, action) => {
      const taskToChange = store.items.find((item) => item.id === action.payload.id)
      // console.log(taskToChange.id)
      // console.log(action.payload.id)

      if (taskToChange.complete === false) {
        // console.log(taskToChange.complete)
        taskToChange.complete = true
      } else if (taskToChange.complete === true) {
        // console.log(taskToChange.complete)
        taskToChange.complete = false
      }
    },

    completeAll: (store) => {
      // eslint-disable-next-line no-return-assign
      store.items.map((item) => item.complete = true)
    }
  }
})