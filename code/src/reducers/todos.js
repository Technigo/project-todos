import { createSlice } from '@reduxjs/toolkit'

import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const todos = createSlice ({
  name: 'todos',
  initialState: {
    items: [
      {id: 1, description: 'Completing project', isComplete: true, createdAt: moment().format('L') },
      {id: 2, description: 'Watch video on Redux', isComplete: false, createdAt: moment().format('L') },
    ]
  },
  reducers: {
  toggleComplete: (store, action) => {
    const updatedItems = store.items.map(todo => {
      if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
      } else {
        return todo
      }
    })
       store.items = updatedItems;
      },

    addNewTodo: (store, action) => {

    const newTask = {
      id: uuidv4(),
      description: action.payload,
      isComplete: false,
      createdAt: moment().format('L') 
    } 
    
    store.items.push(newTask)
    
    },

  deleteItem: (store, action) => {

  const decreasedItems = store.items.filter(todo => 
    todo.id !== action.payload)
    
    store.items = decreasedItems
    }
  }  
})

export default todos