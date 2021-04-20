import { createSlice } from '@reduxjs/toolkit'

import moment from 'moment'

const todos = createSlice ({
  name: 'todos',
  initialState: {
    items: [
      {id: 1, description: 'Task 1', isComplete: false },
      {id: 2, description: 'Task 2', isComplete: false },
      {id: 3, description: 'Task 3', isComplete: false },
    ]
  },
  reducers: {
    // "store" argument keeps all of the data from the slice store (initialState)
        // "action" argument keeps two properties:
        // 1. payload - all of the data passed as an argument (TodoList.js, line 22),
        // 2. type - internal indentifier thanks to which redux know what reducer should it call
  toggleComplete: (store, action) => {
    const updatedItems = store.items.map(todo => {
        // If element from array has same id as id passed in action.payload,
          // then update it
      if (todo.id === action.payload) {
        // This part of code is exactly the same as we would write :
                    // {
                    //   todo.id,
                    //   todo.description,
                    //   todo.isComplete,
                    //   todo.isComplete: !todo.isComplete
                    // }
                    
                    // Third property (line 25) will be overwritten by fourth (line 26),
                    // so the final result is :
                    // {
                    //   todo.id,
                    //   todo.description,
                    //   todo.isComplete: !todo.isComplete
                    // }
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
      } else {
        //Return whole element without changing it
        return todo
      }
    })
      // Finally, update whole store.items property and assign it new value - updatedItems array
       store.items = updatedItems;
      },

    addNewTodo: (store, action) => {

    const newTask = {
      id: (store.items.length)+1,
      description: action.payload,
      isComplete: false,
      createdAt: moment().format('dddd MMMM Do YYYY')
    } 
    store.items.push(newTask)
    
    },

  deleteItem: (store, action) => {
  const updatedItems = store.items.map(todo => {
    if (todo.id === action.payload) {

        return {
        
        }
    } else {

      return todo
    }
  })

     store.items = updatedItems;
    },
    
  }
})

export default todos