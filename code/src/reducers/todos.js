import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todos',
    todoItems: [
      {
        description: 'This is your first todo',
        done: false
      },
    ],
  }
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    removeTodoItem: (state, action) => {
      const { itemIndex } = action.payload
      state.list.todoItems = state.list.todoItems.filter(
        (item, index) => index !== itemIndex
      )
    },
    addTodoItem: (state, action) => {
      const newTodoList = [...state.list.todoItems, action.payload]
      state.list.todoItems = newTodoList
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.todoItems[itemIndex].done = done
    }
  }
})