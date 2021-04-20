import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true, created: '2021-04-18T16:00:23+02:00' },
    { id: 2, text: 'Follow redux codealong', complete: true, created: '2021-04-18T20:14:23+02:00' },
    { id: 3, text: 'Fork week 15 repo', complete: true, created: '2021-04-19T18:30:23+02:00' },
    { id: 4, text: 'Create a todo app', complete: false, created: '2021-04-19T22:14:23+02:00' }
    ],
    idGenerator: 5
},
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            complete: !item.complete,
          }
        } else {
          return item
        } 
      })

      store.items = updatedItems
    },
    postNewTodo: (store, action) => {
      const description = action.payload

      store.items.push({ id: store.idGenerator, text: description, complete: false, created: moment().format() })

      store.idGenerator += 1

    } 

    /*completedTasks: (store, action) => {
      store.items.map(item => {

      })
    }*/
  }
})
