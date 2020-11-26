import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todos',
    todoItems: []
  },
  showList: false
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    removeTodoItem: (state, action) => {
      const { itemId } = action.payload
      state.list.todoItems = state.list.todoItems.filter(
        (item) => item.id !== itemId
      )
    },
    addTodoItem: (state, action) => {
      const newTodoList = [...state.list.todoItems, action.payload]
      state.list.todoItems = newTodoList
    },
    setDone: (state, action) => {
      const { itemId, done } = action.payload
      const matchingId = state.list.todoItems.find((item) => item.id === itemId)

      if (matchingId) {
        matchingId.done = done
      }
    },
    removeAll: () => {
      return initialState
    },
    showList: (state) => {
      state.showList = true
      console.log(state.showList)
    }
  }
})