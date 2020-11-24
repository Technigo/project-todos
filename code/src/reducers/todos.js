import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todos',
    todoItems: [
      {
        description: 'The first',
        done: false
      },
      {
        description: 'The second',
        done: false
      },
      { 
        description: 'The third',
        done: false
      }
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
      const itemInfo = action.payload 
      state.list.todoItems.push(itemInfo)
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.todoItems[itemIndex].done = done
    }
  }
})