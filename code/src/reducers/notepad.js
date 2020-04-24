import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const notepad = createSlice({
  name: 'notepad',
  initialState: {
    items: [
      { id: 1, name: 'Sumbit the project', description: 'submit the code for todo app', dueDate: '2020-04-24T08:27:04.000Z', category: 'work', done: false },
      { id: 2, name: 'Make lunchbox', description: 'make lunchboxes for the weekdays', dueDate: '2020-05-23T08:29:03.000Z', category: 'home', done: false },
      { id: 3, name: 'Write a post', description: 'write some reflections about learning how to code', dueDate: '2020-06-06T08:29:55.000Z', category: 'coding', done: false }
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const { name, description, dueDate, category } = action.payload
      state.items.push({
        id: Date.now(),
        name,
        description,
        dueDate,
        category,
        done: false,
        addedAt: moment(Date.now()).fromNow(),
      })
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    taskDone: (state, action) => {
      console.log(action.payload)
      const checkedTask = state.items.find((item) => item.id === action.payload)
      if (checkedTask) {
        checkedTask.done = !checkedTask.done
      }

    },
  },
})