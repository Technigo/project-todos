import { createSlice } from '@reduxjs/toolkit'

const initialstate = {
  todoListItems: {
    name: 'Todo list',
    items: [
    {
      id: 1,
      description: 'test',
      category: 'work',
      done: false,
      startDate: 2020,
      dueDate: 2021
    },
    {
      id: 2,
      description: 'test 2',
      category: 'private',
      done: false,
      startDate: 2019,
      dueDate: 2022
    }
    ]
  }
}

export const reducer = createSlice({
  name: 'TodoList',
  initialState: initialstate,
  reducers: {
    // Add all reducers here, addItem, removeItem, setDone, toggleDone,

    // Add item, 
    addTodo: ( state, action ) => {
      const { itemInfo } = action.payload
      state.todoListItems.items.push(itemInfo)
    },
    // Remove item,
    removeTodo: ( state, action ) => {
      const { itemIndex } = action.payload
      state.todoListItems.items = state.todoListItems.items.filter(
        ( item, index ) => index !== itemIndex
      )
    },
    // Set done item,
    doneTodo: ( state, action ) => {
      const { itemIndex, done } = action.payload
      state.todoListItems.items[itemIndex].done = done
    },
    // Toggle done/undone items
    toggleTodo: ( state, action ) => {
      const todo = state.todoListItems.items.find(todo => todo.id === action.payload)
      if(todo) {
        todo.done = !todo.done
      }
    },
    killSwitch: ( state, action ) => {
      state.todoListItems.items = []
    }
  }
})