import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todo list',
    items: [
  ]
}
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {

    // add tasks
    addTodo: (state, action) => {
      const itemInfo = action.payload.itemInfo
      state.list.items.push(itemInfo)
    },
    //remove all tasks
    removeAll: (state, action) => {
      state.list.items = []
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload
      state.list.items = state.list.items.filter((item, index) => {
        return index !== itemIndex
      })
    },
    //check todo done
    setDone: (state, action) => {
      console.log(action.payload)
      const { itemIndex, complete } = action.payload
      state.list.items[itemIndex].complete = complete
    }
  }
})