import { createSlice } from '@reduxjs/toolkit'



export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork week 15 repo', complete: true },
    { id: 4, text: 'Create a todo app', complete: false }
    ],
    idGenerator: 5,
    totalTasks: 4
},
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            complete: !item.complete
          }
        } else {
          return item
        }
      })

      store.items = updatedItems
    },
    postNewTodo: (store, action) => {
      const description = action.payload

      store.items.push({ id: store.idGenerator, text: description, complete: false })

      store.totalTasks += 1
      store.idGenerator += 1

    } 
  }
})
