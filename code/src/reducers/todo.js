import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoListItems: {
    name: 'Todo list',
    items: [
    {
      id: Date.now(),
      description: 'Build a todo app',
      category: 'work',
      done: false,
      startDate: '2020-04-13',
      dueDate: '2020-04-10'
    },
    {
      id: Date.now(),
      description: 'Eat pizza!',
      category: 'personal',
      done: false,
      startDate: '2020-04-15',
      dueDate: '2020-04-30'
    },
    {
      id: Date.now(),
      description: 'Watch Tiger king!',
      category: 'other',
      done: false,
      startDate: '2020-04-15',
      dueDate: '2020-04-30'
    },
    {
      id: Date.now(),
      description: 'Drink beer',
      category: 'personal',
      done: false,
      startDate: '2020-04-15',
      dueDate: '2020-04-30'
    },
    {
      id: Date.now(),
      description: 'Social distancing',
      category: 'other',
      done: false,
      startDate: '2020-04-15',
      dueDate: '2020-04-30'
    }
    ]
  }
}

export const todo = createSlice({
  name: 'TodoList',
  initialState: initialState,
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