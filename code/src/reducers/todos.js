import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload
      state.items.push(itemInfo)
    },
    setDone: (state, action) => {
      const { itemId } = action.payload
      const item = state.items.find(
        (item, id) => id === itemId
      )
      item.done = !item.done
    },
    removeTodo: (state, action) => {
      const { itemId } = action.payload
      state.items = state.items.filter(
        (item, id) => id !== itemId
      )
    },
    clearAll: () => {
      return initialState
    },
    showActive: (state) => {
      state.items.forEach(item => {
        item.done ? item.show = false : item.show = true
      })
    },
    showDone: (state) => {
      state.items.forEach(item => {
        item.done ? item.show = true : item.show = false
      })
    },
    showAll: (state) => {
      state.items.forEach(item => item.show = true)
    }
  }
})